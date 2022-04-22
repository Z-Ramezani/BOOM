from django.shortcuts import render, redirect
from Boom.models import Artwork_advertisement
from Boom.serializers import advertisementCreate
from django.http import HttpResponse

def create_advertisement (request):
    list = advertisementCreate()
    if request.method == 'POST':
        list = advertisementCreate(request.POST)
        # artist = Artist.objects.get()
        # artist.free_post_artwork = artist.free_post_artwork - 1
        # artist.save()
        # free_postartwork_decreaser(Artwork_advertisement.artist)
        # advertisementList.Meta.model.artist.field.
        # Artist = Artwork_advertisement.Meta.artist
        # Artist.free
        if list.is_valid():
            # list.sort(key=tosort)
            list.save()
            return redirect('/')
    context = {'list' : list}
    return render(request, 'Front', context)

def edit_advertisement (request, pk):
    artwork = Artwork_advertisement.objects.get(id=pk)
    list = advertisementCreate(instance=artwork)
    if request.method == 'POST':
        list=advertisementCreate(request.POST, instance = artwork)
        if list.is_valid():
            list.save()
            return redirect('/')

    context = {'list' : list}
    return render(request, 'Front', context)

def delete_advertisement (request, pk):
    artwork = Artwork_advertisement.objects.get(id=pk)
    if request.method == 'POST':
        list.delete()
        return redirect('/')
    context = {'list' : list}
    return render(request, 'Front', context)

# def tosort(root):
#     return root.createAt

# def free_postartwork_decreaser (artist):
#     Artist = artist
#     Artist.free_post_artwork = Artist.free_post_artwork - 1