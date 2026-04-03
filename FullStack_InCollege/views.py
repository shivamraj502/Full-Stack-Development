from django.shortcuts import render
from .forms import ProjectForm

def project_view(request):
    form = ProjectForm()

    if request.method == 'POST':
        form = ProjectForm(request.POST)
        if form.is_valid():
            form.save()

    return render(request, 'project.html', {'form': form})