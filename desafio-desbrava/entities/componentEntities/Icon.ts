import glyphMap from "../../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/glyphmaps/Ionicons.json";

export type IconProps = {
    name: keyof typeof glyphMap;
    size?: number;
    color?: string;
}