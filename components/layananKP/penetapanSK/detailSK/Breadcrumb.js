import Link from "next/link";

function Breadcrumb() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Layanan Kenaikan Pangkat</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/layananPeremajaan/suratUsulan">
              <a>Surat Keputusan</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Detail Surat Keputusan
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
