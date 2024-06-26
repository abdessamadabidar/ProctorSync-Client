
import GroupCard from "@/components/GroupCard.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Search} from "lucide-react";
import {Input} from "@/components/ui/input.tsx";
import Paginator from "@/components/Paginator.tsx";
import {useState} from "react";
import {useGroup} from "@/hooks/use-group.ts";
import {Loader} from "@/components/Loader.tsx";
import CreateNewGroupDialog from "@/components/CreateNewGroupDialog";



export default function ProfessorsGroupsPage() {

	const [currentPage, setCurrentPage] = useState<number>(1);
	// @ts-ignore
	const [totalPages, setTotalPages] = useState<number>(1);

	const handlePageChange = (currentPage : number) => {
		setCurrentPage(currentPage);
	};

	const {groups, groupsAreLoading} = useGroup()

	if (groupsAreLoading) return <Loader />;

	return(
		<Card className="bg-transparent border-0 shadow-none">
			<div className="flex flex-col md:flex-row justify-between md:items-center">
				<CardHeader className="px-4 md:px-6">
					<CardTitle className="text-2xl md:text-3xl">Gérer les Groupes</CardTitle>
					<CardDescription className="text-sm md:text-lg">Suivre et gérer tous les groupes sur la plateforme</CardDescription>
				</CardHeader>
				<CreateNewGroupDialog />
			</div>
			<CardContent className="p-4 md:p-6 space-y-6 md:space-y-12">
				<div className="relative flex-1 md:grow-0">
					<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
					<Input
						type="search"
						placeholder="Search..."
						className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
					/>
				</div>
				{groups.length > 0 && (
					<div className="flex flex-col gap-y-6 md:gap-y-12">
						<div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
							{groups?.map((group) => (
								<GroupCard key={group.id} group={group}/>
							))}
						</div>
						<Paginator
							currentPage={currentPage}
							totalPages={totalPages}
							onPageChange={(pageNumber) => handlePageChange(pageNumber)}
							showPreviousNext
						/>
					</div>
				)}
				{groups?.length === 0 && (
					<div
						className="min-h-96 flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
						x-chunk="dashboard-02-chunk-1">
						<div className="flex flex-col items-center gap-1 text-center">
							<h3 className="text-lg text-muted-foreground italic tracking-tight">
								Aucun groupe pour le moment
							</h3>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	)
}