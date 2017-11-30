<% 
	OPTION EXPLICIT 
	Response.Buffer = true
%>

<!-- #include file="engine/utilities/helpers.asp" -->
<!-- #include file="engine/utilities/md5.asp" -->
<!-- #include file="engine/utilities/crc4.asp" -->
<!-- #include file="engine/utilities/Xml_lib.asp" -->
<!-- #include file="engine/utilities/Sql_lib.asp" -->
<!-- #include file="engine/utilities/HtmlComponents.asp" -->
<!-- #include file="engine/utilities/asptemplate.asp" -->
<!-- #include file="engine/utilities/ctransform.asp" -->
<!-- #include file="engine/utilities/CLogFile.asp" -->
<!-- #include file="engine/utilities/cbrowser.asp"-->
<!-- #include file="engine/utilities/functions_send_mail.asp"-->
<!-- #include file="engine/utilities/function_datetime.asp"-->

<!-- #include file="engine/global.asp" -->
<!-- #include file="engine/fx4.lib.asp"-->
<!-- #include file="engine/Web.Config.asp" -->
<!-- #include file="engine/cuser.asp" -->
<!-- #include file="engine/authentication.asp"-->
<!-- #include file="modules/modules.asp" -->

<!-- #include file="engine/cpage.asp" -->

<!-- #include file="engine/admin/admin.skins.asp" -->


<%	
	'-- Execute authentication process

	'-- Current webpage render
	Dim oPage
	Set oPage = new CPage		
		oPage.Display
	Set oPage = Nothing	


Dim oSEO
Dim oGoogle
Dim oBing
Dim oSocial
Dim oMarketing
Dim oMailing
Dim oBigData
Dim o360
Dim oPodjetje
Dim oKontaktnaOseba
Dim oTelefon
Dim oEmail
Dim oSpletnaStran
Dim oFacebook
Dim oInstagram
Dim oLinkedin
Dim oSporocilo
Dim oNisemRobot

oSEO = Request("chkSEO")
oGoogle = Request("chkGoogle")
oBing = Request("chkBing")
oSocial = Request("chkSocial")
oMarketing = Request("chkMarketing")
oMailing = Request("chkMailing")
oBigData = Request("chkBigData")
o360 = Request("chk360")
oPodjetje = Request("txtPodjetje")
oKontaktnaOseba = Request("txtKontaktnaOseba")
oTelefon = Request("txtTelefon")
oEmail = Request("txtEmail")
oSpletnaStran = Request("txtSpletnaStran")
oFacebook = Request("txtFacebook")
oInstagram = Request("txtInstagram")
oLinkedin = Request("txtLinkedin")
oSporocilo = Request("txtSporocilo")
oNisemRobot = Request("chkNisemRobot")

Dim iMsg
Dim iConf
Dim Flds
Dim strHTML
Dim oSettings
Dim ToMail

	For each oSettings in g_oWebSiteXML.SelectNodes("//website")
		ToMail = GetAttribute(oSettings, "EmailAddresses", "")
	Next

Dim oIzbrano
Dim oNeizbrano
oIzbrano="<span style='color:#00cc00;'>DA</span>"
oNeizbrano="<span style='color:#cc0000;'>NE</span>"

if oSEO="on" then 
	oSEO=oIzbrano
else
	oSEO=oNeizbrano
end if

if oGoogle="on" then 
	oGoogle=oIzbrano
else
	oGoogle=oNeizbrano
end if

if oBing="on" then 
	oBing=oIzbrano
else
	oBing=oNeizbrano
end if

if oSocial="on" then 
	oSocial=oIzbrano
else
	oSocial=oNeizbrano
end if

if oMarketing="on" then 
	oMarketing=oIzbrano
else
	oMarketing=oNeizbrano
end if

if oMailing="on" then 
	oMailing=oIzbrano
else
	oMailing=oNeizbrano
end if

if oBigData="on" then 
	oBigData=oIzbrano
else
	oBigData=oNeizbrano
end if

if o360="on" then 
	o360=oIzbrano
else
	o360=oNeizbrano
end if



'---------------------------------------------------------------
strHTML = strHTML & "<html>"
strHTML = strHTML & "<head>"
strHTML = strHTML & "<title>Untitled Document</title>"
strHTML = strHTML & "<meta http-equiv=""content-type"" content=""text/html;charset=windows-1250"">"
strHTML = strHTML & "<LINK HREF=""http://" & g_sServerName & "/skins/sl/themes/classic/templates.css"" REL=""stylesheet"" TYPE=""text/css"">"
strHTML = strHTML & "</head>"
strHTML = strHTML & "<body>"
strHTML = strHTML & "<table>"
       strHTML = strHTML & "<tbody>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;"">Kontaktni podatki iz spletne strani '" & g_sServerName & "'.</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;"">Poslano:&nbsp; " & FormatDateTime(Now(),2) & "  ob " & FormatDateTime(Now(),3) & " </td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td><hr /></td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Optimizacija spletnih strani (seo):&nbsp;</b>" & oSEO & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Google AdWords omrežje:&nbsp;</b>" & oGoogle & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Bing omrežje (Microsoft):&nbsp;</b>" & oBing & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Družbena omrežja:&nbsp;</b>" & oSocial & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Marketing optimizacija:&nbsp;</b>" & oMarketing & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Po&scaron;iljanje mailing liste:&nbsp;</b>" & oMailing & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>&quot;B.I. analitika&quot; in &quot;Big Data&quot;:&nbsp;</b>" & oBigData & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>360-stopinjska fotografija:&nbsp;</b>" & o360 & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Podjetje:&nbsp;</b>" & oPodjetje & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Kontaktna oseba:&nbsp;</b>" & oKontaktnaOseba & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Telefon:&nbsp;</b>" & oTelefon & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>E-mail:&nbsp;</b>" & oEmail & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Spletna stran:&nbsp;</b>" & oSpletnaStran & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Facebook profil podjetja:&nbsp;</b>" & oFacebook & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Instagram profil podjetja:&nbsp;</b>" & oInstagram & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Linkedin profil podjetja:&nbsp;</b>" & oLinkedin & "</td>"
           strHTML = strHTML & "</tr>"
           strHTML = strHTML & "<tr>"
               strHTML = strHTML & "<td style=""font-family:tahoma; color: #000000; font-size:10pt;""><b>Sporočilo:&nbsp;</b>" & oSporocilo & "</td>"
           strHTML = strHTML & "</tr>"
       strHTML = strHTML & "</tbody>"
   strHTML = strHTML & "</table>"
strHTML = strHTML & "</body>"
strHTML = strHTML & "</html>"


if oNisemRobot="on" then
		PosljiEmail strHTML, ToMail,"Povprasevanje"
        'PosljiEmail strHTML, "zkrasovec@gmail.com", "Povprasevanje"
		'PosljiEmail strHTML, "p.pretnar@element.si","Ponudba"
end if

%>