# LowEndHost - Blesta Theme
![alt text](https://github.com/aadesigner/lowendhost-blesta/blob/master/main.jpg?raw=true)
### A free modern html/php theme that comes in 3 different colors and is completely integrated with Blesta billing.
 
**License type**: GPLv2 or later  
**License URL**: https://www.gnu.org/licenses/gpl-2.0.html  
**Author Link**: https://aalayer.com  
**Secondary Link**: https://blesta.shop  

### Installation:

Pick what version of the theme you need. Make sure your Blesta installation is running the same version!

After opening it, you will have 3 folders, each folder for the color-theme you like. Choose your favourite one.

Inside it you will have the "php template" and "blesta template".

- PHP Template = HTML Template, very easy to edit, though, you'll need a local server such as XAMPP to edit the content. Basic HTML knowledge required.

- Blesta Template = Blesta Integration & Theme for the main HTML template, this is what you upload in Blesta templates folder.

To install the Blesta Template, go to app/views/client inside your Blesta installation and upload the template color you like
(blesta template not the HTML/PHP template). 

Than activate it at your Blesta Admin Dashboard - > Look and Feel -> Template name

To change the footer links for the theme, go to

- app/views/client/lowendhost-theme/structure.pdt 

and at the bottom of that file you'll have the links of the footer. Basic HTML knowledge required.

Good luck!