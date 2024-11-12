import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink, PaginationNext,
    PaginationPrevious
} from "@/components/ui/pagination.tsx";
import {useUIStore} from "@/store/store.ts";

export const PluginsFooter = () => {
    const currentPage = useUIStore(state => state.currentPage)
    const filteredPlugins = useUIStore(state => state.filteredPlugins)
    const setCurrentPage = useUIStore(state => state.setCurrentPage)

    return <Pagination>
        <PaginationContent className="text-white">
            <PaginationItem>
                <PaginationPrevious onClick={()=>{
                    if (currentPage === 0) return
                    setCurrentPage(currentPage-1)
                }} />
            </PaginationItem>
            {
                filteredPlugins && filteredPlugins.map((_, i) => {
                    return <PaginationItem key={i}>
                        <PaginationLink isActive={currentPage === i} onClick={()=>{
                            setCurrentPage(i)
                        }}>{i+1}</PaginationLink>
                    </PaginationItem>
                })
            }
            <PaginationItem>
                <PaginationNext className="text-white" aria-disabled={filteredPlugins && filteredPlugins.length -1 == currentPage} onClick={()=>{
                    if (currentPage === filteredPlugins!.length -1) return
                    setCurrentPage(currentPage+1)
                }} />
            </PaginationItem>
        </PaginationContent>
    </Pagination>
}
