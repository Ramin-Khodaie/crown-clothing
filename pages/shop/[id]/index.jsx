import { useRouter } from "next/router"

const ShopId = ()=>{

    const router = useRouter()

    return(
        <div>
            this is shop {router.query.id}
        </div>
    )
}

export default ShopId