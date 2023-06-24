import { Component, ReactNode } from "react";



class CardList extends Component<any ,any>{
    render(): ReactNode {
        const {platform} = this.props
        console.log(this.props.platform)
        return(
            <div>
                {
                    platform.map((platform:any)=>(
                    <div key={platform.id}>
                        <h1>{platform.name}</h1>
                        {
                            platform.games.map((game:any)=>(
                                <p key={game.id}>{game.name}</p>
                            ))
                        }
                    </div>
                    ))
                }
            </div>
        )
    }
}

export default CardList;