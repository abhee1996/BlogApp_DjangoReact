# from rest_framework.generics import ListAPIView,RetrieveAPIView,CreateAPIView,UpdateAPIView,DestroyAPIView
    
from articles.models import Articles
from .serialzers import ArticleSerializer



# class ArticleListView(ListAPIView):
#      queryset = Articles.objects.all()
#      serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
#      queryset = Articles.objects.all()
#      serializer_class = ArticleSerializer

# class ArticleCreateView(CreateAPIView):
#      queryset = Articles.objects.all()
#      serializer_class = ArticleSerializer

# class ArticleUpdateView(UpdateAPIView):
#      queryset = Articles.objects.all()
#      serializer_class = ArticleSerializer

# class ArticleDeleteView(DestroyAPIView):
#      queryset = Articles.objects.all()
#      serializer_class = ArticleSerializer
    

from rest_framework import viewsets


class ArticleViewSet(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Articles.objects.all()