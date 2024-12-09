import { RepoData } from "@/entities/commons/API";
import Text from "../Text";
import { Row } from "@/app/styles";
import Icon from "../Icon";
import { Badge } from "../Badge";
import { badgeColor, timeAgo } from "./helper";
import { Description, Details, ItemHeader, Languages, RepoName } from "./styles";
import { useTheme } from "@/hooks/theme";
import { Link } from "expo-router";

export const RepoItem: React.FC<{ repo: Partial<RepoData> }> = ({ repo }) => {
    const { theme } = useTheme();

    return (
        <>
            <ItemHeader>
                <Link href={{ pathname: '/details', params: { fullname: repo.full_name } }}>
                    <RepoName>{repo.name}</RepoName>
                </Link>
                <Languages>
                    {!!repo?.language && <Badge color={badgeColor(repo.language)} size={12} />}
                    {!!repo?.language && <Text>{repo.language}</Text>}
                </Languages>
            </ItemHeader>
            <Description>{repo.description || ''}</Description>
            <Row>
                {!!repo.stargazers_count && <Details>
                    <Icon name={'star-outline'} size={16} color={theme.text + 'aa'} />{repo.stargazers_count}
                </Details>}
                {!!repo.forks_count && <Details>
                    <Icon name={'git-network-outline'} size={16} color={theme.text + 'aa'} />{repo.forks_count}
                </Details>}
                {!!repo.pushed_at && <Details>
                    atualizado {timeAgo(repo.pushed_at)}
                </Details>}
            </Row>
        </>
    )
}