from django.db import models
from django.utils.text import slugify

class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = 'Categories'
        ordering = ['name']

class Post(models.Model):
    STATUS_CHOICES = [
        ('draft', 'Draft'),
        ('published', 'Published'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    author = models.ForeignKey(
        Author,
        on_delete=models.CASCADE,
        related_name='posts'
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        null=True,
        related_name='posts'
    )
    content = models.TextField()
    excerpt = models.TextField(max_length=300, blank=True)
    status = models.CharField(
        max_length=10,
        choices=STATUS_CHOICES,
        default='draft'l
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    published_at = models.DateTimeField(null=True, blank=True)
    views = models.IntegerField(default=0)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        if not self.excerpt:
            self.excerpt = self.content[:200]
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-published_at', '-created_at']

class Author(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    bio = models.TextField()
    email = models.EmailField()
    twitter = models.CharField(max_length=100, blank=True)
    website = models.URLField(blank=True)
    joined_date = models.DateField(auto_now_add=True)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.name)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']