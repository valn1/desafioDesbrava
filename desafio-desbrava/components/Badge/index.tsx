import { BadgeProps } from "@/entities/componentEntities/Badge";
import { Container } from "./styles";
import Icon from "../Icon";
import Text from "../Text";

export const Badge: React.FC<BadgeProps> = ({ color, icon, size, text }) => {
    return (
        <Container color={color} size={size} icon={icon}>
            {!!icon?.name && <Icon name={icon.name} size={(size || 10)} color={icon.color} />}
            {!icon && !!text && <Text size={size}>{text}</Text>}
        </Container>
    )
}