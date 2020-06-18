export const tpch14 = `const %1214[72] ="\\012\\000\\000\\000\\012\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\016\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000pU\\000\\000*b%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000Gb%\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000\\000"

const %1324[16] ="\\001\\000\\000\\000\\005\\000\\000\\000\\006\\000\\000\\000\\012\\000\\000\\000"

const %5493[0] =""

const %5532[8] ="\\000\\000\\000\\000\\004\\000\\000\\000"

const %8665[21] ="\\000\\000\\000\\000\\005\\000\\000\\000\\000\\000\\000\\000\\005\\000\\000\\000PROMO"

define int32 @_10_init(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader4initEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable4initEPvj (%CompilationContext_cpp_214_1, i32 0)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget4initEPS0_m (%CompilationContext_cpp_214_2, i64 33)
  %CompilationContext_cpp_214_3 = getelementptr int8 %state, i64 368
  %GroupByTranslator_cpp_269_ = call ptr _ZN5umbra17AggregationTarget19createExplicitGroupEm (%CompilationContext_cpp_214_3, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_269_, i64 32
  store data128 d128 {0,0}, %GroupByTranslator_cpp_269_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_269_, i64 16
  store data128 d128 {0,0}, %MaterializationHelper_cpp_983_
  store int8 i8 3, %MaterializationHelper_cpp_726_
  return 1
}

declare void @_ZN5umbra14RelationMapped6Reader4initEPv(int8* %144)

declare void @_ZN5umbra17ChainingHashTable4initEPvj(int8* %354, int32 %368)

declare void @_ZN5umbra17AggregationTarget4initEPS0_m(object umbra::AggregationTarget* %493, int64 %507)

declare int8* @_ZN5umbra17AggregationTarget19createExplicitGroupEm(object umbra::AggregationTarget* %692, int64 %706)

define int32 @_10_planStep(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 5, global %1214, i64 1, global %1324, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 112, i32 2, i32 3, i32 4)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 5)
  return 6
}

declare void @_ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj(int8* %1459, int8* %1473, int64 %1487, object umbra::Relation::RestrictionInfo* %1501, int64 %1515, int32* %1529, int32 %1543)

declare void @_ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj(int8* %1629, int32 %1643, int32 %1657, int32 %1671, int32 %1685)

define int32 @_10_planStep0(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector4initEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector4initEPv(int8* %1843)

define int32 @_10_planStep1(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra17ChainingHashTable9Collector7destroyEPv (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra17ChainingHashTable9Collector7destroyEPv(int8* %1995)

define int32 @_10_planStep2(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

declare void @_ZN5umbra13ExecutionPlan17setupParallelStepEPvj(int8* %2127, int32 %2141)

define int32 @_10_join_tablescan_lineitem(int8* %trampoline, int8* %state, int8* %localState) [
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
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3670016
  %RelationMappedLogic_cpp_310_ = load int32 %RelationMappedLogic_cpp_303_, %localTid
  %Date_cpp_57_ = cmpule i32 %RelationMappedLogic_cpp_310_, 2449991
  %Date_cpp_57_6 = cmpule i32 2449962, %RelationMappedLogic_cpp_310_
  %TableScanTranslator_cpp_425_ = and bool %Date_cpp_57_6, %Date_cpp_57_
  condbr %TableScanTranslator_cpp_425_ %then %contScan

then:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %RelationMappedLogic_cpp_303_7 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 262144
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_303_7, %localTid
  %RelationMappedLogic_cpp_303_8 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 1572864
  %RelationMappedLogic_cpp_309_ = load int64 %RelationMappedLogic_cpp_303_8, %localTid
  %RelationMappedLogic_cpp_303_9 = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 2097152
  %RelationMappedLogic_cpp_309_10 = load int64 %RelationMappedLogic_cpp_303_9, %localTid
  %Hash_cpp_265_ = zext i64 %RelationMappedLogic_cpp_308_
  %Hash_cpp_375_ = crc32 i64 5961697176435608501, %Hash_cpp_265_
  %Hash_cpp_376_ = crc32 i64 2231409791114444147, %Hash_cpp_265_
  %Hash_cpp_380_ = rotr i64 %Hash_cpp_376_, 32
  %Hash_cpp_380_11 = xor i64 %Hash_cpp_375_, %Hash_cpp_380_
  %Hash_cpp_380_12 = mul i64 %Hash_cpp_380_11, 2685821657736338717
  %ChainingHashTableLogic_cpp_78_ = call ptr _ZN5umbra17ChainingHashTable9Collector7collectEmm (%Pipeline_cpp_276_, %Hash_cpp_380_12, i64 20)
  store int32 %RelationMappedLogic_cpp_308_, %ChainingHashTableLogic_cpp_78_
  %MaterializationHelper_cpp_161_ = getelementptr int8 %ChainingHashTableLogic_cpp_78_, i64 4
  store int64 %RelationMappedLogic_cpp_309_, %MaterializationHelper_cpp_161_
  %MaterializationHelper_cpp_150_ = getelementptr int8 %MaterializationHelper_cpp_161_, i64 8
  store int64 %RelationMappedLogic_cpp_309_10, %MaterializationHelper_cpp_150_
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

declare int8* @_ZN5umbra17ChainingHashTable9Collector7collectEmm(object umbra::ChainingHashTable::Collector* %4176, int64 %4190, int64 %4204)

define int32 @_10_planStep3(int8* %trampoline, int8* %state, int8* %localState) [
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

declare void @_ZN5umbra17TableScanOperator3Job7destroyEPv(int8* %4841)

declare void @_ZN5umbra17ChainingHashTable23prepareForInsertEntriesEPvj(object umbra::ChainingHashTable* %4923, int8* %4937, int32 %4951)

declare void @_ZN5umbra13ExecutionPlan20preparePerObjectWorkEPvj(int8* %4991, int32 %5005)

define int32 @_10_join_tablescan_lineitem_extra(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_470_ = load int8* %localState
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE (%CompilationContext_cpp_214_, %Pipeline_cpp_470_)
  br %stepDone

stepDone:
  return 8
}

declare void @_ZN5umbra17ChainingHashTable13insertEntriesERNS0_9CollectorE(object umbra::ChainingHashTable* %5239, object umbra::ChainingHashTable::Collector* %5253)

define int32 @_10_planStep4(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv (%state)
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 224
  call void _ZN5umbra17TableScanOperator3Job4initEPvS2_mPNS_8Relation15RestrictionInfoEmPjj (%CompilationContext_cpp_220_, %CompilationContext_cpp_214_, i64 0, global %5493, i64 0, global %5532, i32 2)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 28736, i32 9, i32 10, i32 11)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 12)
  return 13
}

declare void @_ZN5umbra13ExecutionPlan19finishPerObjectWorkEPv(int8* %5379)

declare void @_ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv(int8* %5411)

define int32 @_10_planStep5(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation4initEPS0_m (%Pipeline_cpp_276_, i64 33)
  return 0
}

declare void @_ZN5umbra14Preaggregation4initEPS0_m(object umbra::Preaggregation* %5848, int64 %5862)

define int32 @_10_planStep6(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  call void _ZN5umbra14Preaggregation7destroyEPS0_ (%Pipeline_cpp_276_)
  return 0
}

declare void @_ZN5umbra14Preaggregation7destroyEPS0_(object umbra::Preaggregation* %6018)

define int32 @_10_planStep7(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_groupby_join_tablescan_part(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %TableScanTranslator_cpp_354_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 0
  %TableScanTranslator_cpp_355_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 1
  %TableScanTranslator_cpp_356_ = load object umbra::TableScanOperator::Morsel %localState, i32 0, i32 2
  %RelationMappedLogic_cpp_335_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 1
  %RelationMappedLogic_cpp_336_ = load object umbra::RelationMapped::Reader %TableScanTranslator_cpp_356_, i32 0, i32 2
  %RelationMappedLogic_cpp_336_0 = ptrtoint i64 %RelationMappedLogic_cpp_336_
  %RelationMappedLogic_cpp_338_ = cmpult i64 %TableScanTranslator_cpp_354_, %TableScanTranslator_cpp_355_
  %CompilationContext_cpp_266_ = load object umbra::GlobalStateHeader %state, i32 0, i32 0
  %CompilationContext_cpp_267_ = getelementptr object umbra::Transaction %CompilationContext_cpp_266_, i32 0, i32 2
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
  %RelationMappedLogic_cpp_308_ = load int32 %RelationMappedLogic_cpp_345_4, %localTid
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
  %MaterializationHelper_cpp_233_ = getelementptr int8 %ChainingHashTableLogic_cpp_115_, i64 4
  %MaterializationHelper_cpp_230_8 = load int64 %MaterializationHelper_cpp_233_
  %MaterializationHelper_cpp_229_ = getelementptr int8 %MaterializationHelper_cpp_233_, i64 8
  %MaterializationHelper_cpp_230_9 = load int64 %MaterializationHelper_cpp_229_
  %Integer_cpp_83_ = cmpeq i32 %RelationMappedLogic_cpp_308_, %MaterializationHelper_cpp_230_
  %ConsumerContext_cpp_417_ = not bool %Integer_cpp_83_
  condbr %ConsumerContext_cpp_417_ %checkCancellation %else

else:
  %RelationMappedLogic_cpp_303_ = getelementptr int8 %RelationMappedLogic_cpp_345_4, i64 3407872
  %RelationMappedLogic_cpp_319_ = getelementptr data128 %RelationMappedLogic_cpp_303_, %localTid
  %RelationMappedLogic_cpp_320_ = load int64 %RelationMappedLogic_cpp_319_
  %RelationMappedLogic_cpp_320_11 = load int64 %RelationMappedLogic_cpp_319_, i32 1
  %RelationMappedLogic_cpp_321_ = trunc i32 %RelationMappedLogic_cpp_320_
  %RelationMappedLogic_cpp_322_ = cmpult i32 12, %RelationMappedLogic_cpp_321_
  %RelationMappedLogic_cpp_322_12 = add i64 %RelationMappedLogic_cpp_320_11, %RelationMappedLogic_cpp_336_0
  %RelationMappedLogic_cpp_322_13 = select i64 %RelationMappedLogic_cpp_322_, %RelationMappedLogic_cpp_322_12, %RelationMappedLogic_cpp_320_11
  %RelationMappedLogic_cpp_324_ = builddata128 d128 %RelationMappedLogic_cpp_320_ %RelationMappedLogic_cpp_322_13
  %Text_cpp_355_ = call bool _ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc (%RelationMappedLogic_cpp_324_, global %8665)
  condbr %Text_cpp_355_ %then %cont18

then:
  br %cont

cont:
  %Numeric_cpp_763_ = checkedssub i64 100, %MaterializationHelper_cpp_230_9 %cont14 %overflow

cont14:
  %BigNumeric_cpp_863_ = ashr i64 %MaterializationHelper_cpp_230_8, 63
  %BigNumeric_cpp_863_15 = builddata128 d128 %MaterializationHelper_cpp_230_8 %BigNumeric_cpp_863_
  %BigNumeric_cpp_863_16 = ashr i64 %Numeric_cpp_763_, 63
  %BigNumeric_cpp_863_17 = builddata128 d128 %Numeric_cpp_763_ %BigNumeric_cpp_863_16
  %Numeric_cpp_698_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_15, %BigNumeric_cpp_863_17)
  br %case

cont18:
  br %case

case:
  %SearchedCaseTranslator_cpp_66_ = phi d128 [%Numeric_cpp_698_, %cont14 d128 {0,0}, %cont18]
  br %cont19

cont19:
  %Numeric_cpp_763_21 = checkedssub i64 100, %MaterializationHelper_cpp_230_9 %cont20 %overflow

cont20:
  %BigNumeric_cpp_863_22 = ashr i64 %MaterializationHelper_cpp_230_8, 63
  %BigNumeric_cpp_863_23 = builddata128 d128 %MaterializationHelper_cpp_230_8 %BigNumeric_cpp_863_22
  %BigNumeric_cpp_863_24 = ashr i64 %Numeric_cpp_763_21, 63
  %BigNumeric_cpp_863_25 = builddata128 d128 %Numeric_cpp_763_21 %BigNumeric_cpp_863_24
  %Numeric_cpp_698_26 = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (%BigNumeric_cpp_863_23, %BigNumeric_cpp_863_25)
  %Pipeline_cpp_276_ = getelementptr int8 %localState, i64 32
  %PreaggregationLogic_cpp_19_ = getelementptr object umbra::Preaggregation %Pipeline_cpp_276_, i32 0, i32 0, i32 0
  %PreaggregationLogic_cpp_20_ = load object umbra::Preaggregation::EntryHeader* %PreaggregationLogic_cpp_19_, i64 4
  %PreaggregationLogic_cpp_25_ = load object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 0, i32 0
  %PreaggregationLogic_cpp_25_27 = cmpne i64 %PreaggregationLogic_cpp_25_, 3749646514382295044
  condbr %PreaggregationLogic_cpp_25_27 %then28 %else29

then28:
  %PreaggregationLogic_cpp_29_ = call ptr _ZN5umbra14Preaggregation8addEntryEm (%Pipeline_cpp_276_, i64 3749646514382295044)
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 32
  store data128 %SearchedCaseTranslator_cpp_66_, %PreaggregationLogic_cpp_29_
  %MaterializationHelper_cpp_983_ = getelementptr int8 %PreaggregationLogic_cpp_29_, i64 16
  store data128 %Numeric_cpp_698_26, %MaterializationHelper_cpp_983_
  store int8 i8 0, %MaterializationHelper_cpp_726_
  br %cont46

else29:
  %PreaggregationLogic_cpp_36_ = getelementptr object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_20_, i32 1
  %MaterializationHelper_cpp_726_30 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 32
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_30
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_31 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_31 %then32 %else33

then32:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  store data128 %SearchedCaseTranslator_cpp_66_, %PreaggregationLogic_cpp_36_
  store int8 %MaterializationHelper_cpp_752_, %MaterializationHelper_cpp_726_30
  br %cont34

else33:
  %MaterializationHelper_cpp_977_ = load data128 %PreaggregationLogic_cpp_36_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_, %SearchedCaseTranslator_cpp_66_)
  store data128 %BigNumeric_cpp_688_, %PreaggregationLogic_cpp_36_
  br %cont34

cont34:
  %10461 = phi i8 [%MaterializationHelper_cpp_752_, %then32 %MaterializationHelper_cpp_727_, %else33]
  %MaterializationHelper_cpp_780_35 = and i8 %10461, 2
  %MaterializationHelper_cpp_780_36 = cmpne i8 %MaterializationHelper_cpp_780_35, 0
  condbr %MaterializationHelper_cpp_780_36 %then37 %else40

then37:
  %MaterializationHelper_cpp_752_38 = and i8 %10461, -3
  %MaterializationHelper_cpp_983_39 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  store data128 %Numeric_cpp_698_26, %MaterializationHelper_cpp_983_39
  store int8 %MaterializationHelper_cpp_752_38, %MaterializationHelper_cpp_726_30
  br %cont45

else40:
  %MaterializationHelper_cpp_977_41 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  %MaterializationHelper_cpp_977_42 = load data128 %MaterializationHelper_cpp_977_41
  %BigNumeric_cpp_688_43 = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_42, %Numeric_cpp_698_26)
  %MaterializationHelper_cpp_983_44 = getelementptr int8 %PreaggregationLogic_cpp_36_, i64 16
  store data128 %BigNumeric_cpp_688_43, %MaterializationHelper_cpp_983_44
  br %cont45

cont45:
  br %cont46

cont46:
  br %checkCancellation

checkCancellation:
  %ChainingHashTableLogic_cpp_129_ = atomicload int8 %CompilationContext_cpp_267_
  %ChainingHashTableLogic_cpp_129_47 = cmpne i8 %ChainingHashTableLogic_cpp_129_, 0
  condbr %ChainingHashTableLogic_cpp_129_47 %cancellation %continueProbe

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

overflow:
  call void _ZN5umbra16RuntimeFunctions13throwOverflowEv ()
  unreachable

cancellation:
  call void _ZN5umbra16RuntimeFunctions20checkForCancellationEv ()
  unreachable
}

declare int8* @_ZN5umbra17ChainingHashTable6lookupEm(object umbra::ChainingHashTable* %7583, int64 %7597)

declare bool @_ZN5umbra11TextRuntime11likeProgramENS_9data128_tEPKc(data128 %8708, int8* %8722)

declare void @_ZN5umbra16RuntimeFunctions13throwOverflowEv()

declare data128 @_ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_(data128 %9029, data128 %9043)

declare int8* @_ZN5umbra14Preaggregation8addEntryEm(object umbra::Preaggregation* %9687, int64 %9701)

declare data128 @_ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_(data128 %10359, data128 %10373)

declare void @_ZN5umbra16RuntimeFunctions20checkForCancellationEv()

declare int8* @_ZN5umbra17ChainingHashTable10lookupNextEPv(object umbra::ChainingHashTable* %11282, int8* %11296)

define int32 @_10_planStep8(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  call void _ZN5umbra17TableScanOperator3Job7destroyEPv (%CompilationContext_cpp_220_)
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget14exchangeTablesEPvm (%CompilationContext_cpp_214_, %state, i64 32)
  %CompilationContext_cpp_220_0 = getelementptr int8 %state, i64 56
  call void _ZN5umbra17AggregationTarget17setupAggregateJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_0)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 15)
  return 14
}

declare void @_ZN5umbra17AggregationTarget14exchangeTablesEPvm(object umbra::AggregationTarget* %11807, int8* %11821, int64 %11835)

declare void @_ZN5umbra17AggregationTarget17setupAggregateJobEPv(object umbra::AggregationTarget* %11926, int8* %11940)

define int32 @_10_groupby_join_tablescan_part_extra(int8* %trampoline, int8* %state, int8* %localState) [
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
  %MaterializationHelper_cpp_726_ = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 32
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_3 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  %MaterializationHelper_cpp_726_4 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 32
  %MaterializationHelper_cpp_727_5 = load int8 %MaterializationHelper_cpp_726_4
  %MaterializationHelper_cpp_780_6 = and i8 %MaterializationHelper_cpp_727_5, 1
  %MaterializationHelper_cpp_780_7 = cmpne i8 %MaterializationHelper_cpp_780_6, 0
  condbr %MaterializationHelper_cpp_780_7 %then8 %else

then8:
  br %cont13

else:
  %MaterializationHelper_cpp_752_ = and i8 %MaterializationHelper_cpp_727_, -2
  condbr %MaterializationHelper_cpp_780_3 %then9 %else10

then9:
  %MaterializationHelper_cpp_977_ = load data128 %GroupByTranslator_cpp_121_
  store data128 %MaterializationHelper_cpp_977_, %GroupByTranslator_cpp_121_2
  br %cont

else10:
  %MaterializationHelper_cpp_977_11 = load data128 %GroupByTranslator_cpp_121_2
  %MaterializationHelper_cpp_977_12 = load data128 %GroupByTranslator_cpp_121_
  %BigNumeric_cpp_688_ = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_11, %MaterializationHelper_cpp_977_12)
  store data128 %BigNumeric_cpp_688_, %GroupByTranslator_cpp_121_2
  br %cont

cont:
  br %cont13

cont13:
  %13869 = phi i8 [%MaterializationHelper_cpp_727_, %then8 %MaterializationHelper_cpp_752_, %cont]
  %MaterializationHelper_cpp_780_14 = and i8 %13869, 2
  %MaterializationHelper_cpp_780_15 = cmpne i8 %MaterializationHelper_cpp_780_14, 0
  %MaterializationHelper_cpp_780_16 = and i8 %MaterializationHelper_cpp_727_5, 2
  %MaterializationHelper_cpp_780_17 = cmpne i8 %MaterializationHelper_cpp_780_16, 0
  condbr %MaterializationHelper_cpp_780_17 %then18 %else19

then18:
  br %cont32

else19:
  %MaterializationHelper_cpp_752_20 = and i8 %13869, -3
  condbr %MaterializationHelper_cpp_780_15 %then21 %else24

then21:
  %MaterializationHelper_cpp_977_22 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 16
  %MaterializationHelper_cpp_977_23 = load data128 %MaterializationHelper_cpp_977_22
  %MaterializationHelper_cpp_983_ = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 16
  store data128 %MaterializationHelper_cpp_977_23, %MaterializationHelper_cpp_983_
  br %cont31

else24:
  %MaterializationHelper_cpp_977_25 = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 16
  %MaterializationHelper_cpp_977_26 = load data128 %MaterializationHelper_cpp_977_25
  %MaterializationHelper_cpp_977_27 = getelementptr int8 %GroupByTranslator_cpp_121_, i64 16
  %MaterializationHelper_cpp_977_28 = load data128 %MaterializationHelper_cpp_977_27
  %BigNumeric_cpp_688_29 = call d128 _ZN5umbra17BigNumericRuntime7addTrapENS_9data128_tES1_ (%MaterializationHelper_cpp_977_26, %MaterializationHelper_cpp_977_28)
  %MaterializationHelper_cpp_983_30 = getelementptr int8 %GroupByTranslator_cpp_121_2, i64 16
  store data128 %BigNumeric_cpp_688_29, %MaterializationHelper_cpp_983_30
  br %cont31

cont31:
  br %cont32

cont32:
  %14720 = phi i8 [%13869, %then18 %MaterializationHelper_cpp_752_20, %cont31]
  store int8 %14720, %MaterializationHelper_cpp_726_
  br %continue

noMatch:
  %PreaggregationLogic_cpp_82_ = load object umbra::Preaggregation::EntryHeader %chainEntry, i32 0, i32 1
  %PreaggregationLogic_cpp_83_ = isnotnull ptr %PreaggregationLogic_cpp_82_
  condbr %PreaggregationLogic_cpp_83_ %loopChain %loopDoneChain

loopDoneChain:
  store object umbra::Preaggregation::EntryHeader %PreaggregationLogic_cpp_69_, %entry, i32 0, i32 1
  store object umbra::Preaggregation::EntryHeader* %entry, %PreaggregationLogic_cpp_67_0
  %PreaggregationLogic_cpp_90_ = load object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_47_, i32 0, i32 2
  %PreaggregationLogic_cpp_90_33 = add i64 %PreaggregationLogic_cpp_90_, 1
  store object umbra::AggregationTarget::Fragment %PreaggregationLogic_cpp_90_33, %PreaggregationLogic_cpp_47_, i32 0, i32 2
  br %continue

continue:
  %PreaggregationLogic_cpp_110_ = getelementptr int8 %entry, i64 49
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
  return 15
}

declare void @_ZN5umbra17AggregationTarget8Fragment9checkSizeEv(object umbra::AggregationTarget::Fragment* %12286)

define int32 @_10_planStep9(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  %CompilationContext_cpp_220_ = getelementptr int8 %state, i64 56
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget12setupScanJobEPv (%CompilationContext_cpp_214_, %CompilationContext_cpp_220_)
  call void _ZN5umbra13ExecutionPlan17setupParallelWorkEPvjjjj (%state, i32 32, i32 16, i32 17, i32 18)
  call void _ZN5umbra13ExecutionPlan17setupParallelStepEPvj (%state, i32 19)
  return 20
}

declare void @_ZN5umbra17AggregationTarget12setupScanJobEPv(object umbra::AggregationTarget* %15568, int8* %15582)

define int32 @_10_planStep10(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep11(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_planStep12(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  return 0
}

define int32 @_10_map_map_groupby(int8* %trampoline, int8* %state, int8* %localState) [
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
  %iter = phi ptr [%PreaggregationLogic_cpp_135_, %loopSlots %PreaggregationLogic_cpp_142_, %cont20]
  %PreaggregationLogic_cpp_140_ = getelementptr int8 %iter, i64 16
  %MaterializationHelper_cpp_726_ = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 32
  %MaterializationHelper_cpp_727_ = load int8 %MaterializationHelper_cpp_726_
  %MaterializationHelper_cpp_780_ = and i8 %MaterializationHelper_cpp_727_, 1
  %MaterializationHelper_cpp_780_1 = cmpne i8 %MaterializationHelper_cpp_780_, 0
  condbr %MaterializationHelper_cpp_780_1 %then %else

then:
  br %cont

else:
  %MaterializationHelper_cpp_977_ = load data128 %PreaggregationLogic_cpp_140_
  br %cont

cont:
  %16703 = phi d128 [d128 {0,0}, %then %MaterializationHelper_cpp_977_, %else]
  %MaterializationHelper_cpp_780_2 = and i8 %MaterializationHelper_cpp_727_, 2
  %MaterializationHelper_cpp_780_3 = cmpne i8 %MaterializationHelper_cpp_780_2, 0
  condbr %MaterializationHelper_cpp_780_3 %then4 %else5

then4:
  br %cont8

else5:
  %MaterializationHelper_cpp_977_6 = getelementptr int8 %PreaggregationLogic_cpp_140_, i64 16
  %MaterializationHelper_cpp_977_7 = load data128 %MaterializationHelper_cpp_977_6
  br %cont8

cont8:
  %16970 = phi d128 [d128 {0,0}, %then4 %MaterializationHelper_cpp_977_7, %else5]
  condbr %MaterializationHelper_cpp_780_1 %then9 %else10

then9:
  br %cont11

else10:
  %BigNumeric_cpp_630_ = call d128 _ZN5umbra17BigNumericRuntime7mulTrapENS_9data128_tES1_ (d128 {10000,0}, %16703)
  br %cont11

cont11:
  %17098 = phi d128 [d128 {0,0}, %then9 %BigNumeric_cpp_630_, %else10]
  %CodeGenerationHelpers_cpp_48_ = or bool %MaterializationHelper_cpp_780_1, %MaterializationHelper_cpp_780_3
  condbr %CodeGenerationHelpers_cpp_48_ %then12 %else13

then12:
  br %cont14

else13:
  %BigNumeric_cpp_600_ = call d128 _ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j (%17098, %16970, i32 8)
  br %cont14

cont14:
  %17294 = phi d128 [d128 {0,0}, %then12 %BigNumeric_cpp_600_, %else13]
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 120
  %sql_cpp_105_ = atomicrmwxchg int8 i8 1, %CompilationContext_cpp_214_
  %CodeGen_cpp_399_ = cmpeq i8 %sql_cpp_105_, 1
  condbr %CodeGen_cpp_399_ %then15 %else16

then15:
  %CodeGen_cpp_400_ = call i8 _ZN5umbra16RuntimeFunctions12lockSpinlockEPvh (%CompilationContext_cpp_214_, i8 1)
  br %cont17

else16:
  br %cont17

cont17:
  condbr %CodeGenerationHelpers_cpp_48_ %then18 %else19

then18:
  call void _ZN5umbra16RuntimeFunctions10outputNullERNS_12OutputTargetE (ptr 0x5570d44147c0)
  br %cont20

else19:
  call void _ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE (ptr 0x5570d44147c0, i64 504403158903032321, %17294)
  br %cont20

cont20:
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
  return 19
}

declare data128 @_ZN5umbra17BigNumericRuntime7divTrapENS_9data128_tES1_j(data128 %17196, data128 %17210, int32 %17224)

declare int8 @_ZN5umbra16RuntimeFunctions12lockSpinlockEPvh(int8* %17478, int8 %17492)

declare void @_ZN5umbra16RuntimeFunctions10outputNullERNS_12OutputTargetE(object umbra::OutputTarget* %17623)

declare void @_ZN5umbra17BigNumericRuntime6outputERNS_12OutputTargetENS_4TypeENS_9data128_tE(object umbra::OutputTarget* %17679, int64 %17693, data128 %17707)

declare void @_ZN5umbra16RuntimeFunctions13printNlResultEv()

declare void @_ZN5umbra16RuntimeFunctions15bumpResultValueEPv(int8* %17793)

define int32 @_10_planStep13(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  call void _ZN5umbra13ExecutionPlan19cleanupParallelWorkEPv (%state)
  return 0
}

define int32 @_10_cleanup(int8* %trampoline, int8* %state, int8* %localState) [
] {
body:
  %CompilationContext_cpp_214_ = getelementptr int8 %state, i64 128
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_)
  %CompilationContext_cpp_214_0 = getelementptr int8 %state, i64 224
  call void _ZN5umbra14RelationMapped6Reader7destroyEPv (%CompilationContext_cpp_214_0)
  %CompilationContext_cpp_214_1 = getelementptr int8 %state, i64 320
  call void _ZN5umbra17ChainingHashTable7destroyEPv (%CompilationContext_cpp_214_1)
  %CompilationContext_cpp_214_2 = getelementptr int8 %state, i64 368
  call void _ZN5umbra17AggregationTarget7destroyEPS0_ (%CompilationContext_cpp_214_2)
  return 0
}

declare void @_ZN5umbra14RelationMapped6Reader7destroyEPv(int8* %18337)

declare void @_ZN5umbra17ChainingHashTable7destroyEPv(int8* %18489)

declare void @_ZN5umbra17AggregationTarget7destroyEPS0_(object umbra::AggregationTarget* %18572)
`;
