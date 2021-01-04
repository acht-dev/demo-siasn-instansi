import Link from "next/link";

function Breadcrumb() {
  return (
    <>
     <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Layanan Pembatalan NIP</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Buat Usulan Pembatalan NIP
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
