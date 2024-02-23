from django.http import HttpResponse
from django.shortcuts import render

def export_html(request):
    if "export" in request.GET:
        # This is where you simulate exporting HTML content
        response = HttpResponse("<html><body>This is a simple HTML export.</body></html>", content_type="text/html")
        response['Content-Disposition'] = 'attachment; filename="exported_page.html"'
        return response
    return render(request, "builder/export_page.html")

def export_html2(request):
    if "export" in request.GET:
        # This is where you simulate exporting HTML content
        response = HttpResponse("<html><body>This is a simple HTML export.</body></html>", content_type="text/html")
        response['Content-Disposition'] = 'attachment; filename="exported_page.html"'
        return response
    return render(request, "builder/export_page2.html")