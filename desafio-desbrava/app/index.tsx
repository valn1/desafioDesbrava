import { Screen } from "@/components/Screen";
import { router } from 'expo-router';
import { Content, FWButton, FWInput, FWText, Lupa, Title } from "./styles";
import { useState } from "react";
import { API } from "@/helpers/API";
import Toast from 'react-native-simple-toast';

export default function Index() {
  const [search, setSearch] = useState('');

  const handlePesquisar = () => {
    API['/users'](search)
    .then(data=>{
      router.push({pathname:'/user',params:{search}})
    })
    .catch((err)=>{
      Toast.show(err.message || 'Usuário não encontrado',Toast.SHORT)
    })
  }

  return (
    <Screen>
      <Title size={40} bold>Encontrar Devs</Title>
      <Content>
        <FWInput
          label="Digite o nome do usuário"
          bordered
          value={search}
          onChangeText={setSearch}
          fontSize={20}
          rightSlot={<Lupa />} />
        <FWButton onPress={handlePesquisar} filled bordered >
          <FWText size={20}>Pesquisar</FWText>
        </FWButton>
      </Content>
    </Screen>
  );
}
