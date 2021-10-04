---
layout: index
---

<h2>ATS Templates</h2>

<ol>
{%- for template in collections.ats  -%}
	<li style="margin-bottom:10px;"><a href="{{template.data.page.url}}"><strong>{{template.data.page.fileSlug | lower }}</strong></a></li>
{%- endfor  -%}
</ol>

<h2>ATS Alumni Templates</h2>

<ol>
{%- for template in collections.alumni  -%}
	<li style="margin-bottom:10px;"><a href="{{template.data.page.url}}"><strong>{{template.data.page.fileSlug | lower }}</strong></a></li>
{%- endfor  -%}
</ol>

<h2>ATS Custom Templates</h2>

<ol>
{%- for template in collections.custom  -%}
	<li style="margin-bottom:10px;"><a href="{{template.data.page.url}}"><strong>{{template.data.page.fileSlug | lower }}</strong></a></li>
{%- endfor  -%}
</ol>
