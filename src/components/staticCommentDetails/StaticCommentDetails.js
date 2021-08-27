export default function StaticCommentDetails(props){
let {location: {state}} = props
    console.log(state)

    let {location: {params}} = props

    console.log(params)


    return (
        <div>
            Hello
        </div>
    )

}