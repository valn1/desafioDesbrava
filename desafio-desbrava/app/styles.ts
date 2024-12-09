import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Text from "@/components/Text";
import TextInput from "@/components/TextInput";
import { IconProps } from "@/entities/componentEntities/Icon";
import { router } from "expo-router";
import styled from "styled-components/native";

export const Title = styled(Text)`
    text-align: left;
    margin: 20px 10px 40px;
`;

export const Content = styled.View`
    flex: 1;
    margin: 20px;
    gap: 20px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    align-items: center;
    margin-right: auto;
`;

export const BottomContent = styled.View`
    margin-top: auto;
    gap: 20px;
    justify-content: center;
    padding: 0 40px;
`;

export const FWInput = styled(TextInput)`
    width: 100%;
`;

export const FWButton = styled(Button)`
    width: 100%;
`;

export const FWText = styled(Text)`
    width: 100%;
    text-align: center;
`;

const LooseIcon = styled(Icon) <Partial<IconProps>>``;

export const Lupa = styled(LooseIcon).attrs({ name: "search-sharp", size: 20 })`
    margin-right: 10px;
`;

export const UserImage = styled.Image`
    width: 100%;
    aspect-ratio: 1;
    border-radius: 10px;
`;

export const UserName = styled(Text)`
    margin: 10px 0;
`;

export const UserBio = styled(Text)`
    margin: 5px 10px;
    color: ${({ theme }) => theme.text}bb;
`;

export const UserFollowsTitle = styled(Text)`
    font-size: 20px;
    color: ${({ theme }) => theme.text};
`;

export const UserFollows = styled(Text)`
    font-size: 40px;
    color: ${({ theme }) => theme.primary};
`;

export const Row = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const Column = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const Separator = styled.View`
    height: 100px;
    width: 2px;
    background-color: ${({ theme }) => theme.text}50;
`;

export const BackButton = styled(Button).attrs({
    iconProps: { name: "chevron-back-sharp", size: 40 },
    onPress: router.back
})`
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1;
`;

export const Languages = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 5px;
    max-width: 30%;
`;

export const Line = styled.View`
    flex-direction: row;
    gap: 20px;
`;