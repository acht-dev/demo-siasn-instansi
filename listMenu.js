import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import NotificationsIcon from "@material-ui/icons/Notifications";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import SettingsIcon from "@material-ui/icons/Settings";
import Sidebar from "./Sidebar";

function onClick(e, item) {
  window.alert(JSON.stringify(item, null, 2));
}

//ListMenu

const menuList = [
    {
        parentMenu: 'view', 
        label: 'View Profile ASN',
        items: [
            {subMenu:'pns', label: 'Profile PNS'},
        ],
    },
    {
        parentMenu: 'peremajaan', 
        label: 'Layanan Peremajaan',
        items: [
            {subMenu:'input', label: 'Berkas Usulan'},
            {subMenu: 'monUsul', label:'Monitoring Usulan'},
            {subMenu: 'surUsul', label:'Surat Usulan'},
            {subMenu: 'penSK', label:'Penetapan Surat Keputusan'},
            {subMenu: 'monSK', label:'Monitoring Surat Keputusan'},
            {subMenu: 'monPen', label: 'Monitoring penetapan'},
        ],
    },
    {
        parentMenu: 'pemberhentian', 
        label: 'Layanan Pemberhentian',
        items: [
            {subMenu:'input', label: 'Berkas Usulan'},
            {subMenu: 'monUsul', label:'Monitoring Usulan'},
            {subMenu: 'surUsul', label:'Surat Usulan'},
            {subMenu: 'penSK', label:'Penetapan Surat Keputusan'},
            {subMenu: 'monSK', label:'Monitoring Surat Keputusan'},
            {subMenu: 'monPen', label: 'Monitoring penetapan'},
        ],
    },
    {
        parentMenu: 'pi', 
        label: 'Layanan Pindah Instansi',
        items: [
            {subMenu:'input', label: 'Berkas Usulan'},
            {subMenu: 'monUsul', label:'Monitoring Usulan'},
            {subMenu: 'surUsul', label:'Surat Usulan'},
            {subMenu: 'penSK', label:'Penetapan Surat Keputusan'},
            {subMenu: 'monSK', label:'Monitoring Surat Keputusan'},
            {subMenu: 'monPen', label: 'Monitoring penetapan'},
        ],
    },
    {
        parentMenu: 'kp', 
        label: 'Layanan Kenaikan Pangkat',
        items: [
            {subMenu:'input', label: 'Berkas Usulan'},
            {subMenu: 'monUsul', label:'Monitoring Usulan'},
            {subMenu: 'surUsul', label:'Surat Usulan'},
            {subMenu: 'penSK', label:'Penetapan Surat Keputusan'},
            {subMenu: 'monSK', label:'Monitoring Surat Keputusan'},
            {subMenu: 'monPen', label: 'Monitoring penetapan'},
        ],
    },
    {
        parentMenu: 'persetujuan', 
        label: 'Layanan Persetujuan',
        items: [ 
            {subMenu:'persetSU', label: 'Persetujuan Surat Usulan'},
            {subMenu: 'monSU', label: 'Monitoring Persetujuan Surat Usulan'},

        ],
    },
    {
        parentMenu: 'pertek', 
        label: 'Layanan Pertek',
        items:[
            {subMenu:'ttdPertek', label: 'Tanda tangan Pertek'},
            {subMenu: 'monPertek', label: 'Monitoring Pertek'},
        ],
    },
    {
        parentMenu: 'monitoring', 
        label: 'Layanan Monitoring',
        items: [
            {subMenu: 'monDispatcher', label: 'Monitoring Layanan'},
        ],
    },
    {
        parentMenu: 'perencanaan', 
        label: 'Layanan Perencanaan',
        items: [],
    },
    {
        parentMenu: 'skk', 
        label: 'Layanan SKK',
        items: [],
    },
    {
        parentMenu: 'manTalenta', 
        label: 'Layanan Manajemen Talenta',
        items: [],
    },
    {
        parentMenu: 'admin', 
        label: 'Layanan Administrasi',
        items: [],
    },
    {
        parentMenu: 'wasdal', 
        label: 'Layanan Wasdal',
        items: [],
    },
    {
        parentMenu: 'bankum', 
        label: 'Layanan Bankum',
        items: [],
    },
]

function ListMenu(){
    return (
        <div>
            <SideBar menuList={menuList}/>
        </div>
    )
}

export default ListMenu;