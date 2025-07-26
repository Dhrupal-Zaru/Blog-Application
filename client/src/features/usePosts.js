import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../service/postApi";

export default function usePosts(){
    const {data: allPosts, isLoading} = useQuery({
        queryKey:['posts'],
        queryFn: getAllPosts
    });
    return{ allPosts, isLoading}
}