import gif from './assets/img/etherpad_demo.gif'
import {LazyLoadImage} from "react-lazy-load-image-component";
export const MainHeadline = () => {
    return <div className="content primary showcase">
        <div className="wrap">
            <h1><strong>Etherpad</strong> is a highly customizable <strong>open
                source</strong> online <strong>editor</strong> providing collaborative editing in
                really <strong>real-time</strong>.</h1>
        </div>

        <div className="demo"><LazyLoadImage src={gif} alt="Show the editor and how fast you can collaborate with other people online."/></div>

        <div className="overview-bar">
            <div className="item"><i className="fa fa-cogs"></i><a href="https://static.etherpad.org/" about="_blank">290
                Plugins</a></div>
            <div className="item"><i className="fa fa-language"></i>105 Languages</div>
            <div className="item"><i className="fa fa-server"></i>Thousands of Instances</div>
            <div className="item"><i className="fa fa-users"></i>Millions of users</div>
        </div>
    </div>
}
