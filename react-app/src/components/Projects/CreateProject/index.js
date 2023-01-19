import { fetchCreateProject } from "../../../store/project";
import ProjectForm from "../ProjectForm";
import React from "react"

const CreatProject=()=>{
    
    const project={
        creatorId:"",
        category:"",
        city:"",
        state:"",
        country:"",
        title:"",
        imageUrl:"",
        videoUrl:"",
        fundingGoal:0,
        startDate:"",
        endDate:"",
        description:"",
        risks:"",
    }

    return (
        <ProjectForm project={project} formType="Create Project"/>
    )
}

export default CreatProject
