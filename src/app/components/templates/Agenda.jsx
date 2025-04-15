import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Questionnarie from "./GRIquestionnarie";
import EnvironmentalCompliance from "./environmentalCompliance";
import HumanRightsAssessment2016 from "./humanRightAssessment2016";


export default function Agenda(){

    return (
        <>
        <Tabs defaultValue="genralDisclosure" className="w-full">
        <TabsList>
            <TabsTrigger value="genralDisclosure">GRI</TabsTrigger>
            <TabsTrigger value="environmentCompliance">Environmental Compliance 2016</TabsTrigger>
            <TabsTrigger value="humanRight">Human Rights Assessment 2016</TabsTrigger>
        </TabsList>

        <TabsContent value="genralDisclosure">
            <Questionnarie/>
        </TabsContent>

        <TabsContent value="environmentCompliance">
            <EnvironmentalCompliance/>
        </TabsContent>
        <TabsContent value="humanRight">
            <HumanRightsAssessment2016/>
        </TabsContent>
        </Tabs>
        </>
    )
}
