from articles.models import Articles
from rest_framework import serializers


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Articles
        fields = ('id','title', 'content','category')