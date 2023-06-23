import skinVariant from './assets/img/etherpad_skin_variants.gif'

export const CustomizeAppearance = ()=>{
    return <div className="content wrap">
        <h2><i className="fa fa-paint-brush"></i> Customize Appearance</h2>
        <img className="skin-variant-demo" src={skinVariant} alt="A video showing the possibility to customize
         the appearance of Etherpad. You can switch between dark, light, super light and super dark."/>
    </div>
}
