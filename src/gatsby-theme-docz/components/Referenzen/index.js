import React from "react";
import { Link } from "gatsby";
import icon from './icon_rgb.svg';
// import "./style.css";



export const Referenzen = () => {
	return (
		<div style={{}}>
			<table style={{width:"100%", marginTop: '5%'}}>
  <tr>
    <td className='tdr'><Link to='/informationen/projekte/autohaeuser'>
						Autohäuser
					</Link></td>
    <td className='tdc'><Link to='/informationen/projekte/banken'>
						Banken
					</Link></td>
    <td className='tdl'><Link to='/informationen/projekte/oeffentlicheauftraege'>
						Öffentl. Aufträge
					</Link></td>
  </tr>
  <tr>
    <td className='tdr'><Link to='/informationen/projekte/krankenhaeuser'>
						Krankenhäuser
					</Link></td>
    <td className='tdc'><img src={icon} alt="Logo Berger Haustechnik" style={{height: '150px', width: 'auto'}}/></td>
    <td className='tdl'><Link to='/informationen/projekte/pflegeeinrichtungen'>
						Pflegeeinrichtungen
					</Link></td>
  </tr>
  <tr>
    <td className='tdr'><Link to='/informationen/projekte/private'>
						Private Auftraggeber
					</Link></td>
    <td className='tdc'><Link to='/informationen/projekte/unternehmen'>
						Unternehmen
					</Link></td>
    <td className='tdl'><Link to='/informationen/projekte/verbaende'>
						Verbände
					</Link></td>
  </tr>
</table>
		</div>
	);
};



// |                                      |       |        |
// | :---:         |     :---:      |          :---: |
// | [Autohäuser](/informationen/projekte/autohaeuser)| [Banken](/informationen/projekte/banken)  | [Öffentl. Aufträge](/informationen/projekte/oeffentlicheauftraege) | 
// | [Krankenhäuser](/informationen/projekte/krankenhaeuser) | ![icon Berger Haustechnik](./images/uploads/icon_rgb.png "Icon Berger Haustechnik") | [Pflegeeinrichtungen](/informationen/projekte/pflegeeinrichtungen) | 
// | [Private Auftraggeber](/informationen/projekte/private)  | [Unternehmen](/informationen/projekte/unternehmen)  | [Verbände](/informationen/projekte/verbaende)  |
