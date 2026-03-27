import proj1 from '../assets/project_substation_build.png'
import proj2 from '../assets/project_powerline_grid.png'
import proj3 from '../assets/project_solar_plant.png'
import proj4 from '../assets/project_control_room.png'

export const projectsData = [
    {
        id: '220kv-substation-rajasthan',
        img: proj1,
        title: '220kV Substation – Rajasthan',
        location: 'Jodhpur, Rajasthan',
        client: 'RVPNL',
        duration: '18 Months',
        tag: 'Substation',
        desc: 'Design, supply & commissioning of a 220/33kV substation for RVPNL serving industrial clusters.',
        fullDesc: 'This project involved the complete turnkey execution of a 220/33kV Air Insulated Substation (AIS) in Jodhpur, Rajasthan. ElektraServe was responsible for the design, engineering, procurement, construction, testing, and commissioning of the facility. The substation serves highly critical industrial clusters in the region, demanding robust protection systems, dual-busbar configurations, and modern switchgear to ensure absolute reliability and grid stability. The project was delivered 2 months ahead of schedule despite challenging terrain.'
    },
    {
        id: '132kv-transmission-line-chhattisgarh',
        img: proj2,
        title: '132kV Transmission Line',
        location: 'Chhattisgarh',
        client: 'CSPDCL',
        duration: '14 Months',
        tag: 'Transmission',
        desc: '80km high-voltage transmission corridor with tower erection and conductor stringing for CSPDCL.',
        fullDesc: 'A flagship transmission project encompassing the survey, foundation casting, tower erection, and conductor stringing of an 80km 132kV double-circuit transmission corridor across Chhattisgarh. Our engineering teams navigated dense forested topographies and complex right-of-way (ROW) challenges. By leveraging advanced tensioner equipment and drone-assisted corridor mapping, we ensured minimal environmental disruption while significantly enhancing the states power evacuation capacity from newly commissioned thermal plants.'
    },
    {
        id: '50mw-solar-evacuation-infrastructure',
        img: proj3,
        title: '50MW Solar Evacuation',
        location: 'Bikaner, Rajasthan',
        client: 'Private IPP',
        duration: '8 Months',
        tag: 'Renewable',
        desc: 'Complete solar energy evacuation infrastructure including 33kV pooling station for a private developer.',
        fullDesc: 'As India aggressively pivots toward renewable energy, ElektraServe was engaged by a leading Independent Power Producer (IPP) to construct the critical evacuation infrastructure for a 50MW Solar Power Plant. The scope included building a 33kV pooling substation, installing power transformers alongside sophisticated grid-code compliant SCADA systems, and a 12km dedicated transmission line to the nearest grid substation. Our specialized testing ensured zero-harm grid synchronization and seamless power flow.'
    },
    {
        id: 'scada-control-centre-hyderabad',
        img: proj4,
        title: 'SCADA Control Centre',
        location: 'Hyderabad, Telangana',
        client: 'TSSPDCL',
        duration: '12 Months',
        tag: 'Automation',
        desc: 'Integrated SCADA setup and control room for real-time monitoring of 5 substations across TSSPDCL.',
        fullDesc: 'A state-of-the-art automation initiative aimed at modernizing grid operations in the Hyderabad metropolitan area. ElektraServe retrofitted 5 existing EHV substations with advanced Remote Terminal Units (RTUs) and established a centralized SCADA control room. This digital transformation empowered operators with real-time telemetry, predictive fault analytics, and remote breaker operation capabilities, drastically reducing downtime and improving fault response times.'
    },
]
