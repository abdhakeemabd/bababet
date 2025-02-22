import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
function FAQ() {
  return (
    <section className='faq-sec'>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3 className='mb-3'>Frequently Asked Questions</h3>
          </div>
          <div className="col-md-7"  data-aos="fade-up" data-aos-offset="10">
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             What is User ID
            </AccordionSummary>
            <AccordionDetails>
              User ID provide platform with accessing world all top popular make preditction and winble deal 
            </AccordionDetails>
          </Accordion>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             What is Master ID and Panel service?
            </AccordionSummary>
            <AccordionDetails>
            Master ID and Panel Service provide customers with a centralized ID for accessing a dashboard (panel) for managing accounts and settings.
            </AccordionDetails>
          </Accordion>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
            Is my personal information secure?
            </AccordionSummary>
            <AccordionDetails>
            Yes, we prioritize the security and privacy of our users' information, employing robust encryption and security measures to safeguard data. 
            </AccordionDetails>
          </Accordion>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             Is customer support available for Master ID users?
            </AccordionSummary>
            <AccordionDetails>
            Yes, we provide dedicated customer support to assist you with any inquiries or issues related to your Master ID account.
            </AccordionDetails>
          </Accordion>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
           What features are included in the Master ID panel?
            </AccordionSummary>
            <AccordionDetails>
            The panel typically includes features such as account linking, profile customization, game library management, and settings optimization.            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
