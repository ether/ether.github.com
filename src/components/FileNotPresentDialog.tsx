import {Dialog, DialogContent} from "./StyledModal.tsx";
import {useUIStore} from "../store/store.ts";
import {faX,faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const FileNotPresentDialog = ()=>{
    const fileNotPresentDialog = useUIStore(state => state.fileNotPresentDialog)
    const openFileNotPresentDialog = useUIStore(state => state.openFileNotPresentDialog)
    const fileNotPresentMetaData = useUIStore(state => state.fileNotPresentMetaData)

    const releaseIsPresent = ()=>{
        return fileNotPresentMetaData?.latestRelease.tag_name.includes(fileNotPresentMetaData?.version)
    }


    return <Dialog open={fileNotPresentDialog} onOpenChange={()=>openFileNotPresentDialog(!fileNotPresentDialog)}>
        <DialogContent className="max-w-fit bg-white dark:bg-gray-600 dark:text-white">
            <h2 className="text-xl">File not present</h2>
                <p>{releaseIsPresent()?<FontAwesomeIcon icon={faCheck} className="text-green-400 mr-2"/>:<FontAwesomeIcon icon={faX} className="text-red-600 mr-2"/>} The GitHub release has {releaseIsPresent()?'':'not'} been created</p>
                <p>Please wait for up to an hour. If the {fileNotPresentMetaData?.os} version is not created after that period. Please create an issue.</p>
                <p>If you want to get started with another etherpad version just click on the <strong>other releases button</strong> and choose an older release</p>
        </DialogContent>
    </Dialog>
}
