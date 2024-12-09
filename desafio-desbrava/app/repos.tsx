import { Screen } from "@/components/Screen";
import { Content, HeaderContent } from "./styles";
import Text from "@/components/Text";
import Button from "@/components/Button";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { API } from "@/helpers/API";
import { RepoData } from "@/entities/commons/API";
import { RepoList } from "@/components/RepoList";

export default function Repos() {

  const params = useLocalSearchParams();
  const [repos, setRepos] = useState<Partial<RepoData>[]>([]);

  useEffect(() => {
    if (params.search) {
      API['/repos'](params.search.toString()).then(setRepos);
    }
  }, []);

  return (
    <Screen noScroll>
      <HeaderContent>
        <Button onPress={router.back} iconProps={{ name: 'chevron-back-sharp', size: 40 }} />
        <Text size={40} bold>Repositórios</Text>
      </HeaderContent>
      <Content>
        <RepoList repos={repos} />
      </Content>
    </Screen>
  );
}
