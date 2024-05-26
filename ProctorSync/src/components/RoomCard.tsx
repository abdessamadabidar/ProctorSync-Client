import {Card, CardContent, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog.tsx";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import EditRoomFrom from "@/components/EditRoomFrom.tsx";
import {cn} from "@/lib/utils.ts";
import {buttonStyle} from "@/assets/style/CustomStyles.ts";
export default function RoomCard() {

    return(
        <Card className="flex flex-col justify-between gap-y-5 bg-card rounded-xl p-3 shadow-sm border-0">
            <div className="space-y-4">
                <CardHeader className="h-48 w-full rounded-lg overflow-hidden p-0">
                    <div className="h-full w-full dark:bg-gray-700 bg-gray-100 flex justify-center items-center text-2xl font-medium">
                        Salle 14
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <p className="text-lg font-medium mb-4">Room Name here</p>
                    <div className="flex flex-col md:flex-row gap-y-2 gap-x-3 font-medium">
                        <div className="flex items-center gap-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"/>
                            </svg>
                            <span className="text-sm">Bloc A</span>
                        </div>
                        <div className="flex items-center gap-x-2">
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
                <AlertDialog>
                    <AlertDialogTrigger className={cn(buttonStyle, "bg-red-500 hover:bg-red-600")}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                        </svg>
                        <span>Supprimer</span>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Supprimer Salle Confirmation</AlertDialogTitle>
                            <AlertDialogDescription>
                                Il s'agit d'une décision définitive. En confirmant cette action, la salle sera
                                définitivement supprimée de la base de données.
                                de la base de données.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter className="space-x-2">
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction className="bg-destructive hover:bg-red-600 ml-0 md:ml-2">Confirmer</AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
                    <Dialog>
                        <DialogTrigger className={cn(buttonStyle, "border bg-card text-accent-foreground hover:bg-muted/25")}>
                            <span>Modifier</span>
                        </DialogTrigger>
                        <DialogContent className="max-h-screen max-w-xl">
                            <DialogHeader>
                                <DialogTitle>Modifier la salle</DialogTitle>
                                <DialogDescription>
                                    Modifier les informations nécessaires ici. Cliquez sur sauvegarder lorsque vous avez terminé.
                                </DialogDescription>
                            </DialogHeader>
                            <EditRoomFrom/>
                        </DialogContent>
                    </Dialog>
            </CardFooter>
        </Card>
    )
}