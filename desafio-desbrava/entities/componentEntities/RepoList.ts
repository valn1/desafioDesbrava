import { FlatListProps } from "react-native"
import { RepoData, RepoDetailsData } from "../commons/API"

type ItemTypes = Partial<RepoData | RepoDetailsData>

export type RepoListProps = Omit<FlatListProps<ItemTypes>,'renderItem' | 'data'> &{
    repos: ItemTypes[]
}