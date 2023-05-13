import { Component, OnInit } from '@angular/core';
import { PageService } from '../service/page.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-manage-sitemap',
  templateUrl: './manage-sitemap.component.html',
  styleUrls: ['./manage-sitemap.component.css']
})
export class ManageSitemapComponent implements OnInit {
  pages: { id: number; title: string; url: string; metaDescription: string; selected: boolean; }[] = [];
  selected :string [] =[]
  constructor(private http: HttpClient, private pageService: PageService) { }
  ngOnInit(): void {
    this.loadPages()
  }
  loadPages(){
    this.pageService.getAllPages().subscribe((pages: { id: number; title: string; url: string; metaDescription: string; selected: boolean; }[]) => this.pages = pages)
    console.log(this.pages)
    
  }
  get selectedPages() {
    return this.pages.filter(page => page.selected);
   
  }

  saveSelectedPages(event: any) {
    
    return console.log(this.selectedPages);
  }
  get links(): string[] {
    return this.selectedPages.map(page => page.url);
}
//pop up modification 
isPopoverOpen = false;
BaseLink='ijeni.tn'
BaseDiscription='ijeni ijeni ijeni ijeni ijeni ijeni ijeni'
ogImage : string = "";
ogTitle: string = "";
ogDescription : string = "";

;


    generateSitemap() {

    // Create a new XML document for the sitemap
    const doc = document.implementation.createDocument(null, 'urlset');
    //generate todays date for the sitemap
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timezoneOffset = String(-now.getTimezoneOffset() / 60).padStart(2, '0');
    const lastmod = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${timezoneOffset}:00`;
    // Add each URL to the sitemap
    for (let i = 0; i < this.links.length; i++) {
      const url = this.links[i];
      const node = doc.createElement('url');
      const loc = doc.createElement('loc');
      const lastmodElement = doc.createElement('lastmod');
      loc.appendChild(doc.createTextNode(url));
      node.appendChild(loc);
      lastmodElement.appendChild(doc.createTextNode(lastmod));
      node.appendChild(lastmodElement);
      doc.documentElement.appendChild(node);
    }

    // Serialize the XML document to a string
    const serializer = new XMLSerializer();
    const sitemap = serializer.serializeToString(doc);

    // Create a new blob with the sitemap content
    const blob = new Blob([sitemap], { type: 'text/xml' });

    // Create a new URL object and set the download attribute to automatically download the file
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('download', 'sitemap.xml');
    a.setAttribute('href', url);

    // Click the link to download the file
    a.click();
  }
}
