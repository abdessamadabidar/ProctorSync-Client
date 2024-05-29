import {UseFormReturn} from "react-hook-form";
import {StepOneExamForm} from "@/zod/schemas/exam-schema.ts";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form.tsx";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select.tsx";

interface FirstStepProps {
    form: UseFormReturn<StepOneExamForm>
}

export default function ExamFirstStepForm({form} : FirstStepProps) {

    return (
        <Form {... form}>
            <form className="space-y-6 py-6 md:px-20 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                        control={form.control}
                        name="subjectId"
                        render={() => (
                            <FormItem>
                                <FormLabel>Matière d'Examen</FormLabel>
                                <FormControl>
                                    <Select onValueChange={(value : string) => form.setValue("subjectId",value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Matière d'examen"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Matière</SelectLabel>
                                                <SelectItem value="ProgrammationJava">Programation Java</SelectItem>
                                                <SelectItem value="ProgramationSpring">Programation Spring Boot</SelectItem>
                                                <SelectItem value="ProgramationC">Programation C++</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="examTypeId"
                        render={() => (
                            <FormItem>
                                <FormLabel>Type d'Examen</FormLabel>
                                <FormControl>
                                    <Select onValueChange={(value : string) => form.setValue("examTypeId",value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Type d'examen"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Examen Type</SelectLabel>
                                                <SelectItem value="Final">Examen Final</SelectItem>
                                                <SelectItem value="Survellié1">Devoire Survellié 1</SelectItem>
                                                <SelectItem value="Survellié2">Devoire Survellié 2</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="sessionId"
                        render={() => (
                            <FormItem>
                                <FormLabel>Session</FormLabel>
                                <FormControl>
                                    <Select onValueChange={(value : string) => form.setValue("sessionId",value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Session d'examen"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Session</SelectLabel>
                                                <SelectItem value="Normale">Session Normale</SelectItem>
                                                <SelectItem value="Rattrapage">Session Rattrapage</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="coordinatorId"
                        render={() => (
                            <FormItem>
                                <FormLabel>Coordinateur</FormLabel>
                                <FormControl>
                                    <Select onValueChange={(value : string) => form.setValue("coordinatorId",value)}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Coordinateur d'examen"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Coordinateur</SelectLabel>
                                                <SelectItem value="Boudaa">Boudaa</SelectItem>
                                                <SelectItem value="Dadi">Dadi</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}