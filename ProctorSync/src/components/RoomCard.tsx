import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import EditRoomDialog from "@/components/EditRoomDialog.tsx";
import DeleteEntityDialog from "@/components/DeleteEntityDialog.tsx";
export default function RoomCard() {

    return(
        <Card className="flex flex-col justify-between gap-y-5 bg-card rounded-xl p-3 shadow-sm ">
            <div className="space-y-4">
                <CardHeader className="h-48 w-full border rounded-lg overflow-hidden p-0">
                    <div className="h-full w-full dark:bg-gray-700 bg-gray-100 flex justify-center items-center text-2xl font-medium">
                        Salle 14
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-lg font-medium mb-4">Room Name here</p>
                    <div className="flex flex-col md:flex-row gap-y-2 gap-x-5 text-muted-foreground font-medium">
                        <div className="flex items-center gap-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/>
                            </svg>
                            <span className="text-sm">Bloc A</span>
                        </div>
                        <div className="flex items-center gap-x-1.5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"/>
                            </svg>
                            <span className="text-sm">200</span>
                        </div>
                    </div>
                </CardContent>
            </div>
            <CardFooter className="grid grid-cols-2 gap-x-2 p-0">
                <DeleteEntityDialog/>
                <EditRoomDialog/>
            </CardFooter>
        </Card>
    )
}