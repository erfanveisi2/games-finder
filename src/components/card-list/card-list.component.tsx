import { Component, ReactNode } from "react";
import './card-list.styles.css'
import { Card } from "../card/card.component";

class CardList extends Component<any ,any>{
    render(): ReactNode {
        const {platform} = this.props
        console.log(this.props.platform)
        return(
            <div className="card-list">
                {
                    platform.map((platform:any)=>(
                        <Card platform={platform}/>
                    ))
                }
            </div>
        )
    }
}

export default CardList;