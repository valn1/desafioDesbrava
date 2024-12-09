import { RepoListProps } from "@/entities/componentEntities/RepoList";
import { FlatList } from "react-native";
import { RepoItem } from "../RepoItem";
import { Header, InvertButton, OrderButton, Separator } from "./styles";
import { useEffect, useState } from "react";
import Icon from "../Icon";

export const RepoList: React.FC<RepoListProps> = ({ repos }) => {
    const [order, setOrder] = useState<string>('Stars');
    const [ascending, setAscending] = useState<boolean>(true);
    const [reorderedRepos, setReorderedRepos] = useState(repos);

    const handleOrder = () => {
        const options = ['Stars', 'Name', 'Updated'];
        const index = options.indexOf(order);
        const next = options[(index + 1) % options.length];
        setOrder(next);
    }

    const toggleAscending = () => setAscending(!ascending);

    useEffect(() => {
            setReorderedRepos([...repos].sort((a, b) => {
                if (ascending) [a,b] = [b, a];
                if (order === 'Stars') return (a.stargazers_count || 0) - (b.stargazers_count || 0);
                if (order === 'Name') return (b.name || '').localeCompare(a.name || '');
                if (order === 'Updated') return new Date(a.pushed_at || '').getTime() - new Date(b.pushed_at || '').getTime();
                return 0;
            }));

    }, [order, ascending, repos]);

    return (
        <>
            <Header>
                <OrderButton onPress={handleOrder} title={order} bordered secondary quiet />
                <InvertButton onPress={toggleAscending} bordered secondary quiet >
                    <Icon name={ascending ? 'chevron-down-sharp' : 'chevron-up-sharp'} size={16} />
                </InvertButton>
            </Header>
            <FlatList
                data={reorderedRepos}
                keyExtractor={(item) => item.full_name ?? ''}
                renderItem={({ item }) => <RepoItem repo={item} />}
                ItemSeparatorComponent={Separator}
            />
        </>
    )
}