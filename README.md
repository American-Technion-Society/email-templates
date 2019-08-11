# 2019 ATS Email Templates

This repo included all the email code for revision history.

## Code Snippets

#### Bulletproof Button

```html
<!-- START CTA BUTTON, make sure to update both links and adjust both widths as needed -->
<!-- When changing the button color, please be sure to update both the fillcolor and the background-color -->
<div align="center">
	<!--[if mso]>
	<v:rect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.ats.org" linkname="Body Button" style="height:50px;v-text-anchor:middle;width:200px;" stroke="f" fillcolor="#208283">
	<w:anchorlock/>
	<center>
	<![endif]-->
	<a
		href="https://www.ats.org"
		linkname="Body Button"
		style="background-color:#208283;color:#ffffff;display:inline-block;font-size:18px;font-family:Arial, sans-serif;font-weight:bold;line-height:50px;text-align:center;text-decoration:none;width:200px;-webkit-text-size-adjust:none;"
		>Learn More</a
	>
	<!--[if mso]>
	</center>
	</v:rect>
<![endif]-->
</div>
<!-- END CTA BUTTON -->
```