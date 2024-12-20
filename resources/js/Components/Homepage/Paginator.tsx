import { Link } from "@inertiajs/react";

const Paginator = ({ meta }: { meta: any }) => {
    console.log(meta);
    const prev = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;
    
    return (
        <div className="btn-group">
          {prev && <Link href="prev" className="btn btn-outline">«</Link>}
            <Link href="#" className="btn btn-outline">{current}</Link>
          {next && <Link href="next"className="btn btn-outline">»</Link>}
        </div>
    )
}

export default Paginator