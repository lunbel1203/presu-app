import Link from 'next/Link'
import {useRouter} from 'next/router'

export default function ItemMenu({url, name, children}) {
    
    const router = useRouter();
    const style = router.asPath === url ? 'bg-green-100 border-green-600 text-green-700 border-r-4' : ''

    return (
        <div className="w-full border-b border-gray-20">
            <Link href={`${url}`}>
                <a className={`w-full flex justify-start items-center px-5 py-3 hover:border-r-4 hover:border-green-600 text-xl hover:text-green-600 hover:bg-green-100 ${style}`}>
                    {children}
                    <span className="pl-5">{name}</span>
                </a>
            </Link>
        </div>
    )

}