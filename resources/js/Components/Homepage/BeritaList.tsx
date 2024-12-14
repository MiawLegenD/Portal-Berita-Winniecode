const isBerita = (artikel: any) => {
    return artikel.map((data: any, i: any) => {
        return (
            <div key={i} className="card w-full lg:w-96 bg-base-100 shadow-xl h-full">
                <figure className="h-64">
                    {data.image && (
                        <img 
                            src={`/storage/${data.image}`} 
                            alt={data.title} 
                            className="w-full h-full object-cover"
                        />
                    )}
                </figure>
                <div className="card-body flex flex-col justify-between">
                    <h2 className="card-title">
                        {data.title}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    {/* Batasi tinggi deskripsi dan tambahkan scroll */}
                    <div className="overflow-y-auto max-h-24 text-sm">
                        <p>{data.description}</p>
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <div className="badge badge-inline">{data.category}</div>
                        <div className="badge badge-outline">{data.author}</div>
                    </div>
                    <div className="mt-4">
                        <a href={`/artikel/${data.id}`} className="btn btn-primary">
                            Selengkapnya
                        </a>
                    </div>
                </div>
            </div>
        );
    });
};

const noBerita = () => {
    return (
        <div>Mohon maaf berita belum tersedia...</div>
    );
};

const BeritaList = ({ artikel }: { artikel: any }) => {
    return !artikel ? noBerita() : isBerita(artikel);
};

export default BeritaList;

