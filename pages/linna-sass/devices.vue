<template>
  <div>

    <h1>Widths</h1>

    <div class="width">

      <div class="iphone-very-tight">
        iphone-very-tight
      </div>

      <div class="iphone-tight">
        iphone-tight
      </div>

      <div class="iphone">
        iphone
      </div>

      <div class="iphone-loose">
        iphone-loose
      </div>

      <div class="iphone-very-loose">
        iphone-very-loose
      </div>

    </div>

    <h1>Heights</h1>

    <div class="height">

      <div class="iphone-very-tight">
        iphone-very-tight
      </div>

      <div class="iphone-tight">
        iphone-tight
      </div>

      <div class="iphone">
        iphone
      </div>

      <div class="iphone-loose">
        iphone-loose
      </div>

      <div class="iphone-very-loose">
        iphone-very-loose
      </div>

    </div>

  </div>
</template>

<style lang="scss" scoped>

.width div,
.height div {
  @include mono;
  border-width: 1px;
}

.width div {
  @include push-pad-vertical;
}

.height {
  @include flex;

  div {
    @include push-pad-right;
  }

}


// Width

.width .iphone-very-tight {
  width: $iphone-width-very-tight;

  &:after {
    @include block;
    content: '#{$iphone-width-very-tight}';
  }
}

.width .iphone-tight {
  width: $iphone-width-tight;

  &:after {
    @include block;
    content: '#{$iphone-width-tight}';
  }
}

.width .iphone {
  width: $iphone-width;

  &:after {
    @include block;
    content: '#{$iphone-width}';
  }
}

.width .iphone-loose {
  width: $iphone-width-loose;

  &:after {
    @include block;
    content: '#{$iphone-width-loose}';
  }
}

.width .iphone-very-loose {
  width: $iphone-width-very-loose;

  &:after {
    @include block;
    content: '#{$iphone-width-very-loose}';
  }
}



// Height

.height .iphone-very-tight {
  height: $iphone-height-very-tight;

  &:after {
    @include block;
    content: '#{$iphone-height-very-tight}';
  }
}

.height .iphone-tight {
  height: $iphone-height-tight;

  &:after {
    @include block;
    content: '#{$iphone-height-tight}';
  }
}

.height .iphone {
  height: $iphone-height;

  &:after {
    @include block;
    content: '#{$iphone-height}';
  }
}

.height .iphone-loose {
  height: $iphone-height-loose;

  &:after {
    @include block;
    content: '#{$iphone-height-loose}';
  }
}

.height .iphone-very-loose {
  height: $iphone-height-very-loose;

  &:after {
    @include block;
    content: '#{$iphone-height-very-loose}';
  }
}

</style>
