FROM php:7-apache

RUN apt-get update && apt-get install -y \
        libfreetype6-dev \
        libjpeg62-turbo-dev \
        libmcrypt-dev \
        libpng-dev \
        libmagickwand-dev --no-install-recommends \
        zlib1g-dev \
    && docker-php-ext-install -j5 iconv \
    && docker-php-ext-install mysqli \
    && docker-php-ext-install pdo pdo_mysql \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install -j5 gd \
    && docker-php-ext-install zip

RUN pecl install mcrypt-1.0.1 \
    && pecl install redis-4.0.0 \
    && pecl install xdebug-2.6.0 \
    && pecl install imagick-3.4.3 \
    && docker-php-ext-enable mcrypt redis xdebug imagick

# install composer
RUN curl -sS https://getcomposer.org/installer | \
  php -- --install-dir=/usr/local/bin --filename=composer
  
RUN echo date.timezone=Asia/Bangkok > /usr/local/etc/php/conf.d/timezone.ini
