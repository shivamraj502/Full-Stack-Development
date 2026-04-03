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