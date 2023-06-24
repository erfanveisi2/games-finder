import { Component, ReactNode } from "react";
import './card.styles.css'

export class Card extends Component <any , any>{

    render(): ReactNode {
        const {platform}= this.props
        return(
        <div className="card-container" key={platform.id}>
            <img alt="platform" src={platform.image_background} height={300} width={350}/>
            <h1>{platform.name}</h1>
            {
                platform.games.map((game:any)=>(
                    <p key={game.id}>{game.name}</p>
                ))
            }
        </div>
        )
    }
}