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
            <Link href="/layananKP/monitoringUsulan">
              <a>Monitoring Usulan</a>
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Detail Monitoring Usulan
          </li>
        </ol>
      </nav>
    </>
  );
}

export default Breadcrumb;
