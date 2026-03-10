export default function AppComics({ comic }) {
    return (
        <div key={comic.id} className="col bg-black col-6 col-sm-4 col-md-3 col-lg-2">
            <img className='imgthumb' src={comic.thumb} alt={comic.title} />
            <p>{comic.title}</p>
        </div>
    )
}