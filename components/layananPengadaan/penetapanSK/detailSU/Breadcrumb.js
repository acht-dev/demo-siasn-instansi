import Link from "next/link";

function Breadcrumb() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-transparent">
          <li className="breadcrumb-item">
            <Link href="/">
              <a>Layanan Penetapan NIP</a>
            </Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/layananPengadaan/suratUsulan">
              <a>Surat Usulan</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Detail Surat Usulan
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
