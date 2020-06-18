export const tpch17 = `const %1535[144] ="\\006\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000iU\\000\\000\\007\\000\\000\\000MED BOX\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\003\\000\\000\\000\\002\\000\\000\\000\\000\\000\\000\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000iU\\000\\000\\010\\000\\000\\000Brand#23\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1717[12] ="\\000\\000\\000\\000\\003\\000\\000\\000\\006\\000\\000\\000"

const %6739[0] =""

const %6778[12] ="\\001\\000\\000\\000\\004\\000\\000\\000\\005\\000\\000\\000"

const %17099[8] ="\\001\\000\\000\\000\\004\\000\\000\\000"

define int32 @_9_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_3, i32 0)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_4, i64 4)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_6, i32 0)
  %CompilationContext_cpp_214_7 = getelementptr int8 %state, i64 25152
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_7, i64 9)
  %CompilationContext_cpp_214_8 = getelementptr int8 %state, i64 25152
  %GroupByTranslator_cpp_269_ = call ptr _ZN5umbra17AggregationTarget19createExplicitGroupEm (%CompilationContext_cpp_214_8, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_269_, i64 8
  store int64 i64 0, %GroupByTranslator_cpp_269_
  store int8 i8 1, %MaterializationHelper_cpp_726_
  return 1
}

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %144)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %354, int32 %368)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %683, int64 %697)

declare int8* @_ZN5umbra17AggregationTarget19createExplicitGroupEm(object umbra::AggregationTarget* %1141, int64 %1155)

define int32 @_9_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %1535, i64 2, global %1717, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1834, int8* %1848, int64 %1862, object umbra::Relation::RestrictionInfo* %1876, int64 %1890, int32* %1904, int32 %1918)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %2004, int32 %2018, int32 %2032, int32 %2046, int32 %2060)

define int32 @_9_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %2228)

define int32 @_9_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %2380)

define int32 @_9_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2512, int32 %2526)

define int32 @_9_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 112
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 4718592
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_6 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_7 = add i64 %RelationMappedLogic_cpp_320_6, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_8 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_7, %RelationMappedLogic_cpp_320_6
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_8
  %Char_cpp_113_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_114_ = cmpeq i64 %Char_cpp_113_, 2325059504644816903
  condbr %Char_cpp_114_ %then %cont11

then:
  %Char_cpp_115_ = extractdata128 i64 %RelationMappedLogic_cpp_324_
  %Char_cpp_115_9 = cmpeq i64 %Char_cpp_115_, 5787458
  condbr %Char_cpp_115_9 %then10 %else

then10:
  br %cont

else:
  %Char_cpp_118_ = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_, d128 {2325059504644816903,5787458})
  br %cont

cont:
  %4453 = phi bool [bool true, %then10 %Char_cpp_118_, %else]
  br %cont11

cont11:
  %4496 = phi bool [%4453, %cont bool false, %loopTuples]
  condbr %4496 %then12 %contScan

then12:
  %RelationMappedLogic_cpp_303_13 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2359296
  %RelationMappedLogic_cpp_319_14 = getelementptr data128 %RelationMappedLogic_cpp_303_13, %localTid
  %RelationMappedLogic_cpp_320_15 = load int64 %RelationMappedLogic_cpp_319_14
  %RelationMappedLogic_cpp_320_16 = load int64 %RelationMappedLogic_cpp_319_14, i32 1
  %RelationMappedLogic_cpp_321_17 = trunc i32 %RelationMappedLogic_cpp_320_15
  %RelationMappedLogic_cpp_322_18 = cmpult i32 12, %RelationMappedLogic_cpp_321_17
  %RelationMappedLogic_cpp_322_19 = add i64 %RelationMappedLogic_cpp_320_16, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_20 = select i64 %RelationMappedLogic_cpp_322_18, %RelationMappedLogic_cpp_322_19, %RelationMappedLogic_cpp_320_16
  %RelationMappedLogic_cpp_324_21 = builddata128 d128 %RelationMappedLogic_cpp_320_15 %RelationMappedLogic_cpp_322_20
  %Char_cpp_113_22 = extractdata128 i64 %RelationMappedLogic_cpp_324_21
  %Char_cpp_114_23 = cmpeq i64 %Char_cpp_113_22, 7953764044706414600
  condbr %Char_cpp_114_23 %then24 %cont31

then24:
  %Char_cpp_115_25 = extractdata128 i64 %RelationMappedLogic_cpp_324_21
  %Char_cpp_115_26 = cmpeq i64 %Char_cpp_115_25, 858923876
  condbr %Char_cpp_115_26 %then27 %else28

then27:
  br %cont30

else28:
  %Char_cpp_118_29 = call bool _ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_ (%RelationMappedLogic_cpp_324_21, d128 {7953764044706414600,858923876})
  br %cont30

cont30:
  %5245 = phi bool [bool true, %then27 %Char_cpp_118_29, %else28]
  br %cont31

cont31:
  %5281 = phi bool [%5245, %cont30 bool false, %then12]
  condbr %5281 %then32 %contScan

then32:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_33 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_34 = mul i64 %Hash_cpp_380_33, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_34, i64 4)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 5
}

declare bool @_ZN5umbra11TextRuntime18compareEqNonOwningENS_9data128_tES1_(data128 %4379, data128 %4393)

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %5584, int64 %5598, int64 %5612)

define int32 @_9_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 8)
  return 7
}

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %6087)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %6169, int8* %6183, int32 %6197)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %6237, int32 %6251)

define int32 @_9_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %6485, object umbra::ChainingHashTable::Collector* %6499)

define int32 @_9_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %6739, i64 0, global %6778, i32 3)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28816, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %6625)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %6657)

define int32 @_9_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 28736
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  %Pipeline_cpp_276_0 = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_0, i64 4)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %7195, int64 %7209)

define int32 @_9_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 28736
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  %Pipeline_cpp_276_0 = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_0)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %7424)

define int32 @_9_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_join_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %Hash_cpp_265_8 = zext i64 %MaterializationHelper_cpp_230_
  %Hash_cpp_375_9 = crc32 i64 5961697176435608501, %Hash_cpp_265_8
  %Hash_cpp_376_10 = crc32 i64 2231409791114444147, %Hash_cpp_265_8
  %Hash_cpp_380_11 = rotr i64 %Hash_cpp_376_10, 32
  %Hash_cpp_380_12 = xor i64 %Hash_cpp_375_9, %Hash_cpp_380_11
  %Hash_cpp_380_13 = mul i64 %Hash_cpp_380_12, 2685821657736338717
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = and i64 %Hash_cpp_380_13, 1023
  %PreaggregationLogic_cpp_20_14 = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, %PreaggregationLogic_cpp_20_
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_14, i32 0, i32 0
  %PreaggregationLogic_cpp_25_15 = cmpne i64 %PreaggregationLogic_cpp_25_, %Hash_cpp_380_13
  condbr %PreaggregationLogic_cpp_25_15 %then %else16

then:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, %Hash_cpp_380_13)
  store int32 %MaterializationHelper_cpp_230_, %PreaggregationLogic_cpp_29_
  br %cont

else16:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_14, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_36_
  %Integer_cpp_83_17 = cmpeq i32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_876_
  %ConsumerContext_cpp_417_18 = not bool %Integer_cpp_83_17
  condbr %ConsumerContext_cpp_417_18 %then %else19

else19:
  br %cont

cont:
  %Pipeline_cpp_276_20 = getelementptr int8 %localState, i64 28736
  %RelationMappedLogic_cpp_303_21 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_21, %localTid
  %RelationMappedLogic_cpp_303_22 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_23 = load int64 %RelationMappedLogic_cpp_303_22, %localTid
  %Hash_cpp_265_24 = zext i64 %MaterializationHelper_cpp_230_
  %Hash_cpp_375_25 = crc32 i64 5961697176435608501, %Hash_cpp_265_24
  %Hash_cpp_376_26 = crc32 i64 2231409791114444147, %Hash_cpp_265_24
  %Hash_cpp_380_27 = rotr i64 %Hash_cpp_376_26, 32
  %Hash_cpp_380_28 = xor i64 %Hash_cpp_375_25, %Hash_cpp_380_27
  %Hash_cpp_380_29 = mul i64 %Hash_cpp_380_28, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_20, %Hash_cpp_380_29, i64 20)
  store int32 %MaterializationHelper_cpp_230_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 8
  store int64 %RelationMappedLogic_cpp_309_23, %MaterializationHelper_cpp_150_
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 12
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %9044, int64 %9058)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %9957, int64 %9971)

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %11135, int8* %11149)

define int32 @_9_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 28736)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 28736)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

define int32 @_9_join_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 15
}

define int32 @_9_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 17)
  return 16
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %12096, int8* %12110, int64 %12124)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %12214, int8* %12228)

define int32 @_9_join_join_tablescan_lineitem_extra10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_112_ = getelementptr object umbra::Preaggregation::EntryHeader %entry, i32 1
  %MaterializationHelper_cpp_876_ = load int32 %GroupByTranslator_cpp_112_
  %GroupByTranslator_cpp_113_ = getelementptr object umbra::Preaggregation::EntryHeader %chainEntry, i32 1
  %MaterializationHelper_cpp_876_2 = load int32 %GroupByTranslator_cpp_113_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_876_2
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %noMatch %else

else:
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_4 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_4, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 20
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 17
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %12564)

define int32 @_9_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 18, i32 19, i32 20)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 21)
  return 22
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %14465, int8* %14479)

define int32 @_9_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep14(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupjoin_groupbyscan(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %loopChain]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_876_ = load int32 %PreaggregationLogic_cpp_140_
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %Hash_cpp_265_ = zext i64 %MaterializationHelper_cpp_876_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_1 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_2 = mul i64 %Hash_cpp_380_1, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_2, i64 26)
  store int32 %MaterializationHelper_cpp_876_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int32 %MaterializationHelper_cpp_876_, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_161_3 = getelementptr int8 %MaterializationHelper_cpp_161_, i64 4
  store int8 i8 0, %MaterializationHelper_cpp_161_3
  %GroupJoinTranslator_cpp_208_ = getelementptr int8 %MaterializationHelper_cpp_161_3, i64 1
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupJoinTranslator_cpp_208_, i64 16
  store int64 i64 0, %GroupJoinTranslator_cpp_208_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupJoinTranslator_cpp_208_, i64 8
  store int64 i64 0, %MaterializationHelper_cpp_983_
  store int8 i8 1, %MaterializationHelper_cpp_726_
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 21
}

define int32 @_9_planStep15(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj (%CompilationContext_cpp_214_, %state, i32 32)
  call void _ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj (%state, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 24)
  return 23
}

define int32 @_9_groupjoin_groupbyscan_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 24
}

define int32 @_9_planStep16(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %6739, i64 0, global %17099, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 25, i32 26, i32 27)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 28)
  return 29
}

define int32 @_9_planStep17(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep18(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep19(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupjoin_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_338_ %loopBlocks %loopDoneBlocks

loopBlocks:
  %firstTid = phi i64 [%TableScanTranslator_cpp_354_, %body %RelationMappedLogic_cpp_343_2, %loopDoneTuples]
  %RelationMappedLogic_cpp_341_ = lshr i64 %firstTid, 16
  %RelationMappedLogic_cpp_342_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_342_1 = add i64 %RelationMappedLogic_cpp_342_, 65536
  %RelationMappedLogic_cpp_343_ = cmpult i64 %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_343_2 = select i64 %RelationMappedLogic_cpp_343_, %TableScanTranslator_cpp_355_, %RelationMappedLogic_cpp_342_1
  %RelationMappedLogic_cpp_345_ = mul i64 %RelationMappedLogic_cpp_341_, 116
  %RelationMappedLogic_cpp_345_3 = mul i64 %RelationMappedLogic_cpp_345_, 65536
  %RelationMappedLogic_cpp_345_4 = getelementptr int8 %RelationMappedLogic_cpp_335_, %RelationMappedLogic_cpp_345_3
  %RelationMappedLogic_cpp_346_ = shl i64 %RelationMappedLogic_cpp_341_, 16
  %RelationMappedLogic_cpp_347_ = sub i64 %firstTid, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_347_5 = sub i64 %RelationMappedLogic_cpp_343_2, %RelationMappedLogic_cpp_346_
  %RelationMappedLogic_cpp_349_ = cmpne i64 %RelationMappedLogic_cpp_347_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_349_ %loopTuples %loopDoneTuples

loopTuples:
  %localTid = phi i64 [%RelationMappedLogic_cpp_347_, %loopBlocks %RelationMappedLogic_cpp_356_, %contScan]
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_6 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_7 = mul i64 %Hash_cpp_380_6, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_7)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %loopTuples %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_233_9 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 4
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %continueProbe %else

else:
  %RelationMappedLogic_cpp_303_10 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1048576
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_10, %localTid
  %GroupJoinTranslator_cpp_241_ = atomicrmwxchg int8 i8 2, %MaterializationHelper_cpp_233_9
  %CodeGen_cpp_399_ = cmpeq i8 %GroupJoinTranslator_cpp_241_, 2
  condbr %CodeGen_cpp_399_ %then %else11

then:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%MaterializationHelper_cpp_233_9, i8 2)
  br %cont

else11:
  br %cont

cont:
  %GroupJoinTranslator_cpp_245_ = getelementptr int8 %MaterializationHelper_cpp_233_9, i64 1
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupJoinTranslator_cpp_245_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_12 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_12 %then13 %else14

then13:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  store int64 %RelationMappedLogic_cpp_309_, %GroupJoinTranslator_cpp_245_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_
  br %cont16

else14:
  %MaterializationHelper_cpp_977_ = load int64 %GroupJoinTranslator_cpp_245_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_, %RelationMappedLogic_cpp_309_ %cont15 %overflow

cont15:
  store int64 %Numeric_cpp_777_, %GroupJoinTranslator_cpp_245_
  br %cont16

cont16:
  %MaterializationHelper_cpp_977_17 = getelementptr int8 %GroupJoinTranslator_cpp_245_, i64 8
  %MaterializationHelper_cpp_977_18 = load int64 %MaterializationHelper_cpp_977_17
  %Aggregate_cpp_166_ = add i64 %MaterializationHelper_cpp_977_18, 1
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupJoinTranslator_cpp_245_, i64 8
  store int64 %Aggregate_cpp_166_, %MaterializationHelper_cpp_983_
  atomicstore int8 i8 1, %MaterializationHelper_cpp_233_9
  br %loopDoneloopHashChain

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %contScan

contScan:
  %RelationMappedLogic_cpp_356_ = add i64 %localTid, 1
  %RelationMappedLogic_cpp_357_ = cmpne i64 %RelationMappedLogic_cpp_356_, %RelationMappedLogic_cpp_347_5
  condbr %RelationMappedLogic_cpp_357_ %loopTuples %loopDoneTuples

loopDoneTuples:
  %RelationMappedLogic_cpp_359_ = cmpne i64 %RelationMappedLogic_cpp_343_2, %TableScanTranslator_cpp_355_
  condbr %RelationMappedLogic_cpp_359_ %loopBlocks %loopDoneBlocks

loopDoneBlocks:
  br %stepDone

stepDone:
  return 28

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %19719, int8 %19733)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

define int32 @_9_planStep20(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7ScanJob4initEPvS2_ (%CompilationContext_cpp_220_0, %CompilationContext_cpp_214_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 30, i32 31, i32 32)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 33)
  return 34
}

declare void @_ZN5umbra17ChainingHashTable7ScanJob4initEPvS2_(int8* %21172, int8* %21186)

define int32 @_9_planStep21(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 9)
  return 0
}

define int32 @_9_planStep22(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

define int32 @_9_planStep23(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_groupby_join_map_groupjoin(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %ChainingHashTableLogic_cpp_160_ = load object umbra::ChainingHashTable::ScanMorsel %localState, i32 0, i32 0
  %ChainingHashTableLogic_cpp_160_0 = load object umbra::ChainingHashTable::ScanMorsel %localState, i32 0, i32 1
  %ChainingHashTableLogic_cpp_161_ = cmpne ptr %ChainingHashTableLogic_cpp_160_, %ChainingHashTableLogic_cpp_160_0
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
  condbr %ChainingHashTableLogic_cpp_161_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%ChainingHashTableLogic_cpp_160_, %body %ChainingHashTableLogic_cpp_185_, %loopDoneEntries]
  %ChainingHashTableLogic_cpp_164_ = load int64 %slot
  %ChainingHashTableLogic_cpp_166_ = lshr i64 %ChainingHashTableLogic_cpp_164_, 16
  %ChainingHashTableLogic_cpp_167_ = inttoptr ptr %ChainingHashTableLogic_cpp_166_
  %ChainingHashTableLogic_cpp_168_ = isnotnull ptr %ChainingHashTableLogic_cpp_167_
  condbr %ChainingHashTableLogic_cpp_168_ %loopEntries %loopDoneEntries

loopEntries:
  %entry = phi ptr [%ChainingHashTableLogic_cpp_167_, %loopSlots %ChainingHashTableLogic_cpp_181_40, %continue]
  %ChainingHashTableLogic_cpp_174_ = getelementptr int8 %entry, i64 16
  %MaterializationHelper_cpp_230_ = load int32 %ChainingHashTableLogic_cpp_174_
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_174_, i64 4
  %MaterializationHelper_cpp_233_2 = getelementptr int8 %MaterializationHelper_cpp_233_, i64 4
  %GroupJoinTranslator_cpp_324_ = getelementptr int8 %MaterializationHelper_cpp_233_2, i64 1
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupJoinTranslator_cpp_324_, i64 16
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_4 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_4 %then %else

then:
  br %cont

else:
  %MaterializationHelper_cpp_977_ = load int64 %GroupJoinTranslator_cpp_324_
  br %cont

cont:
  %22882 = phi i64 [i64 0, %then %MaterializationHelper_cpp_977_, %else]
  %MaterializationHelper_cpp_876_ = getelementptr int8 %GroupJoinTranslator_cpp_324_, i64 8
  %MaterializationHelper_cpp_876_5 = load int64 %MaterializationHelper_cpp_876_
  condbr %MaterializationHelper_cpp_780_4 %then6 %else7

then6:
  br %cont11

else7:
  %BigNumeric_cpp_863_ = ashr i64 %22882, 63
  %BigNumeric_cpp_863_8 = builddata128 d128 %22882 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_9 = ashr i64 %MaterializationHelper_cpp_876_5, 63
  %BigNumeric_cpp_863_10 = builddata128 d128 %MaterializationHelper_cpp_876_5 %BigNumeric_cpp_863_9
  %Numeric_cpp_627_ = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%BigNumeric_cpp_863_8, %BigNumeric_cpp_863_10, i32 19)
  br %cont11

cont11:
  %23310 = phi d128 [d128 {0,0}, %then6 %Numeric_cpp_627_, %else7]
  condbr %MaterializationHelper_cpp_780_4 %then12 %else13

then12:
  br %cont14

else13:
  %BigNumeric_cpp_630_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (d128 {2,0}, %23310)
  br %cont14

cont14:
  %23466 = phi d128 [d128 {0,0}, %then12 %BigNumeric_cpp_630_, %else13]
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25104
  %Hash_cpp_265_ = zext i64 %MaterializationHelper_cpp_230_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_15 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_16 = mul i64 %Hash_cpp_380_15, 2685821657736338717
  %ChainingHashTableLogic_cpp_108_ = call ptr _ZN5umbra17ChainingHashTable6lookupEm (%CompilationContext_cpp_214_, %Hash_cpp_380_16)
  %ChainingHashTableLogic_cpp_110_ = isnotnull ptr %ChainingHashTableLogic_cpp_108_
  condbr %ChainingHashTableLogic_cpp_110_ %looploopHashChain %loopDoneloopHashChain

looploopHashChain:
  %hashEntry = phi ptr [%ChainingHashTableLogic_cpp_108_, %cont14 %ChainingHashTableLogic_cpp_136_, %continueProbe]
  %ChainingHashTableLogic_cpp_115_ = getelementptr int8 %hashEntry, i64 16
  %MaterializationHelper_cpp_230_17 = load int32 %ChainingHashTableLogic_cpp_115_
  %MaterializationHelper_cpp_233_18 = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_19 = load int64 %MaterializationHelper_cpp_233_18
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_18, i64 8
  %MaterializationHelper_cpp_230_20 = load int64 %MaterializationHelper_cpp_229_
  %Integer_cpp_83_ = cmpeq i32 %MaterializationHelper_cpp_230_, %MaterializationHelper_cpp_230_17
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else22

else22:
  %BigNumeric_cpp_310_ = call i32 _ZN5umbra17BigNumericRuntime17compareIntShiftUpENS_9data128_tElj (%23466, %MaterializationHelper_cpp_230_19, i32 20)
  %BigNumeric_cpp_422_ = cmpslt i32 0, %BigNumeric_cpp_310_
  %Value_cpp_126_ = not bool %MaterializationHelper_cpp_780_4
  %Value_cpp_126_23 = and bool %BigNumeric_cpp_422_, %Value_cpp_126_
  condbr %Value_cpp_126_23 %then24 %checkCancellation

then24:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, i64 4
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 0, i32 0
  %PreaggregationLogic_cpp_25_25 = cmpne i64 %PreaggregationLogic_cpp_25_, 3749646514382295044
  condbr %PreaggregationLogic_cpp_25_25 %then26 %else28

then26:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_27 = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 8
  store int64 %MaterializationHelper_cpp_230_20, %PreaggregationLogic_cpp_29_
  store int8 i8 0, %MaterializationHelper_cpp_726_27
  br %cont38

else28:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 1
  %MaterializationHelper_cpp_726_29 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 8
  %MaterializationHelper_cpp_727_30 = load int8 %MaterializationHelper_cpp_726_29
  %MaterializationHelper_cpp_780_31 = and i8 %MaterializationHelper_cpp_727_30, 1
  %MaterializationHelper_cpp_780_32 = cmpne i8 %MaterializationHelper_cpp_780_31, 0
  condbr %MaterializationHelper_cpp_780_32 %then33 %else34

then33:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_30, -2
  store int64 %MaterializationHelper_cpp_230_20, %PreaggregationLogic_cpp_36_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_29
  br %cont37

else34:
  %MaterializationHelper_cpp_977_35 = load int64 %PreaggregationLogic_cpp_36_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_35, %MaterializationHelper_cpp_230_20 %cont36 %overflow

cont36:
  store int64 %Numeric_cpp_777_, %PreaggregationLogic_cpp_36_
  br %cont37

cont37:
  br %cont38

cont38:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_39 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_39 %cancellation %continueProbe

continueProbe:
  %ChainingHashTableLogic_cpp_136_ = call ptr _ZN5umbra17ChainingHashTable10lookupNextEPv (%CompilationContext_cpp_214_, %hashEntry)
  %ChainingHashTableLogic_cpp_137_ = isnotnull ptr %ChainingHashTableLogic_cpp_136_
  condbr %ChainingHashTableLogic_cpp_137_ %looploopHashChain %loopDoneloopHashChain

loopDoneloopHashChain:
  br %continue

continue:
  %ChainingHashTableLogic_cpp_181_ = getelementptr int8 %entry, i64 8
  %ChainingHashTableLogic_cpp_181_40 = load int8* %ChainingHashTableLogic_cpp_181_
  %ChainingHashTableLogic_cpp_182_ = isnotnull ptr %ChainingHashTableLogic_cpp_181_40
  condbr %ChainingHashTableLogic_cpp_182_ %loopEntries %loopDoneEntries

loopDoneEntries:
  %ChainingHashTableLogic_cpp_185_ = getelementptr int64 %slot, i32 1
  %ChainingHashTableLogic_cpp_186_ = cmpne ptr %ChainingHashTableLogic_cpp_185_, %ChainingHashTableLogic_cpp_160_0
  condbr %ChainingHashTableLogic_cpp_186_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 33

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare data128 @_ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j(data128 %23215, data128 %23229, int32 %23243)

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %23386, data128 %23400)

declare int32 @_ZN5umbra17BigNumericRuntime17compareIntShiftUpENS_9data128_tElj(data128 %24313, int64 %24327, int32 %24341)

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

define int32 @_9_planStep24(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25152
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 36)
  return 35
}

define int32 @_9_groupby_join_map_groupjoin_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_47_ = load object umbra::AggregationTarget::Fragment* %localState
  %PreaggregationLogic_cpp_48_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 3
  %PreaggregationLogic_cpp_50_ = isnotnull ptr %PreaggregationLogic_cpp_48_
  condbr %PreaggregationLogic_cpp_50_ %loopChunk %loopDoneChunk

loopChunk:
  %chunk = phi ptr [%PreaggregationLogic_cpp_48_, %body %PreaggregationLogic_cpp_115_, %loopDoneChunkEntries]
  call void _ZN5umbra17AggregationTarget8Fragment9checkSizeEv (%PreaggregationLogic_cpp_47_)
  %PreaggregationLogic_cpp_55_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 0
  %PreaggregationLogic_cpp_56_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 1
  %PreaggregationLogic_cpp_60_ = getelementptr object umbra::Preaggregation::EntryChunk %chunk, i32 1
  %PreaggregationLogic_cpp_61_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 1
  %PreaggregationLogic_cpp_62_ = cmpne ptr %PreaggregationLogic_cpp_60_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_62_ %loopChunkEntries %loopDoneChunkEntries

loopChunkEntries:
  %entry = phi ptr [%PreaggregationLogic_cpp_60_, %loopChunk %PreaggregationLogic_cpp_110_, %continue]
  %PreaggregationLogic_cpp_66_ = load object umbra::Preaggregation::EntryHeader %entry, i32 0, i32 0
  %PreaggregationLogic_cpp_67_ = lshr i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_56_
  %PreaggregationLogic_cpp_67_0 = getelementptr object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_55_, %PreaggregationLogic_cpp_67_
  %PreaggregationLogic_cpp_69_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_71_ = isnotnull ptr %PreaggregationLogic_cpp_69_
  condbr %PreaggregationLogic_cpp_71_ %loopChain %loopDoneChain

loopChain:
  %chainEntry = phi ptr [%PreaggregationLogic_cpp_69_, %loopChunkEntries %PreaggregationLogic_cpp_82_, %noMatch]
  %PreaggregationLogic_cpp_75_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 0
  %PreaggregationLogic_cpp_75_1 = cmpeq i64 %PreaggregationLogic_cpp_66_, %PreaggregationLogic_cpp_75_
  condbr %PreaggregationLogic_cpp_75_1 %then %noMatch

then:
  %GroupByTranslator_cpp_121_ = getelementptr int8 %entry, i64 16
  %GroupByTranslator_cpp_121_2 = getelementptr int8 %chainEntry, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 8
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_3 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  %MaterializationHelper_cpp_726_4 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 8
  %MaterializationHelper_cpp_727_5 = load int8 %MaterializationHelper_cpp_726_4
  %MaterializationHelper_cpp_780_6 = and i8 %MaterializationHelper_cpp_727_5, 1
  %MaterializationHelper_cpp_780_7 = cmpne i8 %MaterializationHelper_cpp_780_6, 0
  condbr %MaterializationHelper_cpp_780_7 %then8 %else

then8:
  br %cont14

else:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  condbr %MaterializationHelper_cpp_780_3 %then9 %else10

then9:
  %MaterializationHelper_cpp_977_ = load int64 %GroupByTranslator_cpp_121_
  store int64 %MaterializationHelper_cpp_977_, %GroupByTranslator_cpp_121_2
  br %cont13

else10:
  %MaterializationHelper_cpp_977_11 = load int64 %GroupByTranslator_cpp_121_2
  %MaterializationHelper_cpp_977_12 = load int64 %GroupByTranslator_cpp_121_
  %Numeric_cpp_777_ = checkedsadd i64 %MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_12 %cont %overflow

cont:
  store int64 %Numeric_cpp_777_, %GroupByTranslator_cpp_121_2
  br %cont13

cont13:
  br %cont14

cont14:
  %28324 = phi i8 [%MaterializationHelper_cpp_727_, %then8 %MaterializationHelper_cpp_752_, %cont13]
  store int8 %28324, %MaterializationHelper_cpp_726_
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_15 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_15, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 25
  %PreaggregationLogic_cpp_111_ = cmpne ptr %PreaggregationLogic_cpp_110_, %PreaggregationLogic_cpp_61_
  condbr %PreaggregationLogic_cpp_111_ %loopChunkEntries %loopDoneChunkEntries

loopDoneChunkEntries:
  %PreaggregationLogic_cpp_115_ = load object umbra::Preaggregation::EntryChunk %chunk, i32 0, i32 0
  %PreaggregationLogic_cpp_116_ = isnotnull ptr %PreaggregationLogic_cpp_115_
  condbr %PreaggregationLogic_cpp_116_ %loopChunk %loopDoneChunk

loopDoneChunk:
  store object umbra::AggregationTarget::Fragment ptr 0, %PreaggregationLogic_cpp_47_, i32 0, i32 3
  br %stepDone

stepDone:
  return 36

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable
}

define int32 @_9_planStep25(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 25152
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 37, i32 38, i32 39)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 40)
  return 41
}

define int32 @_9_planStep26(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep27(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_planStep28(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_9_map_map_groupby(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %PreaggregationLogic_cpp_127_ = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 0
  %PreaggregationLogic_cpp_127_0 = load object umbra::AggregationTarget::ScanMorsel %localState, i32 0, i32 1
  %PreaggregationLogic_cpp_130_ = cmpne ptr %PreaggregationLogic_cpp_127_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_130_ %loopSlots %loopDoneSlots

loopSlots:
  %slot = phi ptr [%PreaggregationLogic_cpp_127_, %body %PreaggregationLogic_cpp_146_, %loopDoneChain]
  %PreaggregationLogic_cpp_135_ = load object umbra::Preaggregation::EntryHeader* %slot
  %PreaggregationLogic_cpp_136_ = isnotnull ptr %PreaggregationLogic_cpp_135_
  condbr %PreaggregationLogic_cpp_136_ %loopChain %loopDoneChain

loopChain:
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %cont15]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 8
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_1 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_1 %then %else

then:
  br %cont

else:
  %MaterializationHelper_cpp_977_ = load int64 %PreaggregationLogic_cpp_140_
  br %cont

cont:
  %30275 = phi i64 [i64 0, %then %MaterializationHelper_cpp_977_, %else]
  condbr %MaterializationHelper_cpp_780_1 %then2 %else3

then2:
  br %cont9

else3:
  %Numeric_cpp_643_ = checkedsmul i64 %30275, 100000 %cont4 %overflow

cont4:
  condbr bool false %div0 %cont5

cont5:
  br %else8

else8:
  %Numeric_cpp_648_ = sdiv i64 %Numeric_cpp_643_, 70
  br %cont9

cont9:
  %30564 = phi i64 [i64 0, %then2 %Numeric_cpp_648_, %else8]
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then10 %else11

then10:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont12

else11:
  br %cont12

cont12:
  condbr %MaterializationHelper_cpp_780_1 %then13 %else14

then13:
  call void _ZN5umbra16RuntimeFunctions10outputNullERNS_12OutputTargetE (ptr 0x5569db35c7c0)
  br %cont15

else14:
  call void _ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl (ptr 0x5569db35c7c0, i64 432345564512781825, %30564)
  br %cont15

cont15:
  call void _ZN5umbra16RuntimeFunctions13printNlResultEv ()
  atomicstore int8 i8 0, %CompilationContext_cpp_214_
  call void _ZN5umbra16RuntimeFunctions15bumpResultValueEPv (%state)
  %PreaggregationLogic_cpp_142_ = load object umbra::Preaggregation::EntryHeader %iter, i32 0, i32 1
  %PreaggregationLogic_cpp_143_ = isnotnull ptr %PreaggregationLogic_cpp_142_
  condbr %PreaggregationLogic_cpp_143_ %loopChain %loopDoneChain

loopDoneChain:
  %PreaggregationLogic_cpp_146_ = getelementptr object umbra::Preaggregation::EntryHeader* %slot, i32 1
  %PreaggregationLogic_cpp_147_ = cmpne ptr %PreaggregationLogic_cpp_146_, %PreaggregationLogic_cpp_127_0
  condbr %PreaggregationLogic_cpp_147_ %loopSlots %loopDoneSlots

loopDoneSlots:
  br %stepDone

stepDone:
  return 40

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

div0:
  call void _ZN5umbra16RuntimeFunctions9throwDiv0Ev ()
  unreachable
}

declare void @_ZN5umbra16RuntimeFunctions9throwDiv0Ev()

declare void @_ZN5umbra16RuntimeFunctions10outputNullERNS_12OutputTargetE(object umbra::OutputTarget* %30865)

declare void @_ZN5umbra14NumericRuntime6outputERNS_12OutputTargetENS_4TypeEl(object umbra::OutputTarget* %30921, int64 %30935, int64 %30949)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %31035)

define int32 @_9_planStep29(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_9_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_2)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 464
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_3)
  %CompilationContext_cpp_214_4 = getelementptr int8 %state, i64 512
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_4)
  %CompilationContext_cpp_214_5 = getelementptr int8 %state, i64 25104
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_5)
  %CompilationContext_cpp_214_6 = getelementptr int8 %state, i64 25152
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_6)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %31579)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %31731)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %31952)
`;
