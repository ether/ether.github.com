import {FC} from "react";

type PluginAuthorProps = {
    email: string,
    name: string,
}

export const PluginAuthorComp: FC<PluginAuthorProps> = ({email,name})=>{


    if (email && name){
        return <a href={"mailto:"+email}><span className="text-primary">Author:</span> {name}</a>
    } else if (name){
        return <span><span className="text-primary">Author:</span> {name}</span>
    }
    return <span>No Author</span>

}
