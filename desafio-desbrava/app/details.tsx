import { Screen } from "@/components/Screen";
import { Content, HeaderContent, Languages, Line, Row } from "./styles";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { API } from "@/helpers/API";
import { RepoDetailsData } from "@/entities/commons/API";
import { Badge } from "@/components/Badge";
import { badgeColor, timeAgo } from "@/components/RepoItem/helper";
import Icon from "@/components/Icon";
import { useTheme } from "@/hooks/theme";
import { Linking } from "react-native";

export default function Details() {
    const { theme } = useTheme();
    const params = useLocalSearchParams();
    const [repo, setRepo] = useState<Partial<RepoDetailsData>>({});

    useEffect(() => {

        if (params.fullname) {
            API['/repo_details'](params.fullname.toString()).then(setRepo);
        }
    }, []);

    return (
        <Screen noScroll>
            <HeaderContent>
                <Button onPress={router.back} iconProps={{ name: 'chevron-back-sharp', size: 40 }} />
                <Text size={30} bold lineBreakMode="head" ellipsizeMode="head" numberOfLines={1} style={{ width: '80%' }}>{params.fullname}</Text>
            </HeaderContent>
            <Content>
                <Line>
                    {!!repo.stargazers_count && <Text>
                        <Icon name={'star-outline'} size={16} color={theme.text + 'aa'} />{repo.stargazers_count}
                    </Text>}
                    {!!repo.forks_count && <Text>
                        <Icon name={'git-network-outline'} size={16} color={theme.text + 'aa'} />{repo.forks_count}
                    </Text>}
                    {!!repo.pushed_at && <Text>
                        atualizado {timeAgo(repo.pushed_at)}
                    </Text>}
                </Line>
                {!!repo?.language &&
                    <Languages>
                        <Badge color={badgeColor(repo.language)} size={12} />
                        <Text>{repo.language}</Text>
                    </Languages>}
                {repo.description && <Text size={20} >Descrição: {repo.description}</Text>}
                <Button onPress={() => Linking.openURL(repo.html_url || '')} >
                    <Text underline color={theme.accent} size={18}>{repo.html_url}</Text>
                </Button>
            </Content>
        </Screen>
    );
}
