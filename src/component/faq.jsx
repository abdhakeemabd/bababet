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
          <div className="col-md-7"  data-aos="fade-up" data-aos-offset="10">
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             what is UserID
            </AccordionSummary>
            <AccordionDetails>
              user id provide platform with accessing world all top popular make preditction abd winble deal 
            </AccordionDetails>
          </Accordion>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             what is UserID
            </AccordionSummary>
            <AccordionDetails>
              user id provide platform with accessing world all top popular make preditction abd winble deal 
            </AccordionDetails>
          </Accordion>
          <Accordion slotProps={{ heading: { component: 'h4' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
             what is UserID
            </AccordionSummary>
            <AccordionDetails>
              user id provide platform with accessing world all top popular make preditction abd winble deal 
            </AccordionDetails>
          </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
